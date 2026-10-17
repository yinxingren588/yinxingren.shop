import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const historyFile = path.resolve(__dirname, '.indexnow-history.json');
const pendingFile = path.resolve(__dirname, '.indexnow-pending.json');

// 读取配置
const indexnowConfig = JSON.parse(
  fs.readFileSync(path.resolve(rootDir, 'src/config/indexnow.json'), 'utf8')
);

// 读取站点配置提取 SITE_URL
const siteTsContent = fs.readFileSync(path.resolve(rootDir, 'src/config/site.ts'), 'utf8');
const siteUrlMatch = siteTsContent.match(/SITE_URL\s*=\s*['"]([^'"]+)['"]/);
const SITE_URL = siteUrlMatch ? siteUrlMatch[1] : 'https://yinxingren.shop';
const host = new URL(SITE_URL).host;

const KEY = indexnowConfig.key;
const KEY_FILE = indexnowConfig.keyFile;
const KEY_LOCATION = `${SITE_URL}/${KEY_FILE}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

/**
 * 计算文件内容 SHA-256 指纹
 */
function getFileFingerprint(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
}

/**
 * 映射 URL 到 dist 目录下的预渲染静态 HTML 文件路径
 */
function mapUrlToDistHtml(url) {
  const pathname = new URL(url).pathname;
  if (pathname === '/' || pathname === '') {
    return path.resolve(distDir, 'index.html');
  }
  const clean = pathname.replace(/^\/|\/$/g, '');
  return path.resolve(distDir, clean, 'index.html');
}

async function checkRemoteKey() {
  return new Promise((resolve) => {
    https
      .get(KEY_LOCATION, { timeout: 3000 }, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode === 200 && data.trim() === KEY) {
            resolve({ ok: true, status: res.statusCode });
          } else {
            resolve({ ok: false, status: res.statusCode, body: data });
          }
        });
      })
      .on('error', (err) => {
        resolve({ ok: false, error: err.message });
      });
  });
}

async function postIndexNow(payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
      },
      timeout: 5000,
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', (d) => (responseBody += d));
      res.on('end', () => {
        resolve({ status: res.statusCode, body: responseBody });
      });
    });

    req.on('error', (e) => reject(e));
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('⚡ IndexNow Protocol Orchestrator');
  console.log('--------------------------------------------------');
  console.log(`Host:         ${host}`);
  console.log(`API Key:      ${KEY}`);
  console.log(`Key File:     ${KEY_FILE}`);
  console.log(`Key Location: ${KEY_LOCATION}`);
  console.log('--------------------------------------------------');

  // 1. 验证本地 Key 文件是否存在
  const publicKeyPath = path.resolve(rootDir, 'public', KEY_FILE);
  const distKeyPath = path.resolve(distDir, KEY_FILE);

  if (!fs.existsSync(publicKeyPath)) {
    console.error(`❌ Key file missing in public/: ${publicKeyPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(distKeyPath)) {
    // 若 dist 中缺少则自动复制
    fs.mkdirSync(distDir, { recursive: true });
    fs.copyFileSync(publicKeyPath, distKeyPath);
  }
  console.log('✅ Local Key files verified in public/ and dist/');

  // 2. 加载统一路由登记提取当前活跃的 10 个可索引正式页面
  const routesTsContent = fs.readFileSync(path.resolve(rootDir, 'src/config/routes.ts'), 'utf8');
  const canonicalMatches = [...routesTsContent.matchAll(/canonical:\s*`\$\{SITE_URL\}([^`]*)`/g)].map(
    (m) => `${SITE_URL}${m[1]}`
  );
  // 去除 404/not-found 等无 canonical 的项
  const currentIndexableUrls = Array.from(new Set(canonicalMatches)).filter((u) => u && !u.includes('*'));

  // 3. 读取变更历史缓存进行指纹去重比对
  let history = { urls: {} };
  if (fs.existsSync(historyFile)) {
    try {
      history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
    } catch {
      history = { urls: {} };
    }
  }

  const addedUrls = [];
  const modifiedUrls = [];
  const unchangedUrls = [];
  const deletedUrls = [];

  // 比对当前活跃页面
  for (const url of currentIndexableUrls) {
    const htmlPath = mapUrlToDistHtml(url);
    const currentFingerprint = getFileFingerprint(htmlPath);

    if (!history.urls[url]) {
      addedUrls.push(url);
    } else if (history.urls[url].fingerprint !== currentFingerprint) {
      modifiedUrls.push(url);
    } else {
      unchangedUrls.push(url);
    }
  }

  // 检测被删除或下线的页面
  for (const [prevUrl, prevData] of Object.entries(history.urls)) {
    if (prevData.status === 'active' && !currentIndexableUrls.includes(prevUrl)) {
      deletedUrls.push(prevUrl);
    }
  }

  console.log(`📊 Route Diff:`);
  console.log(`   - Added (新增待提交):    ${addedUrls.length}`);
  console.log(`   - Modified (变更待提交): ${modifiedUrls.length}`);
  console.log(`   - Deleted (下线通知):    ${deletedUrls.length}`);
  console.log(`   - Unchanged (指纹去重跳过): ${unchangedUrls.length}`);

  const pendingList = [...addedUrls, ...modifiedUrls, ...deletedUrls];

  // 过滤规则：绝对不允许提交 AFF、Hash、localhost 或非正式 URL
  const validSubmitList = pendingList.filter((url) => {
    return (
      url.startsWith(SITE_URL) &&
      !url.includes('invisibleaff') &&
      !url.includes('JF4seZUy') &&
      !url.includes('localhost') &&
      !url.includes('#') &&
      !url.includes('?') &&
      !url.endsWith('404.html')
    );
  });

  const payload = {
    host: host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: validSubmitList,
  };

  // 持久化待提交任务清单
  fs.writeFileSync(
    pendingFile,
    JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        payload: payload,
        stats: {
          added: addedUrls,
          modified: modifiedUrls,
          deleted: deletedUrls,
          unchanged: unchangedUrls,
        },
      },
      null,
      2
    ),
    'utf8'
  );
  console.log(`💾 Pending submission payload saved to ${pendingFile}`);

  // 4. 远程 Key 验证与安全提交判定
  const isSubmitMode = process.argv.includes('--submit');

  console.log('\n🌐 Live Deployment Verification:');
  const remoteCheck = await checkRemoteKey();

  if (!remoteCheck.ok) {
    console.log(`ℹ️ Remote check failed: ${remoteCheck.error || `HTTP ${remoteCheck.status}`}`);
    console.log(
      '🔒 [Notice]: Live domain is not yet deployed or Key file is not reachable publicly over HTTPS.'
    );
    console.log(
      '🔒 [Policy]: Per Step 12 specification, we DO NOT falsely claim submission success before live verification.'
    );
    console.log('🔒 IndexNow configuration, key file, and diff payload are fully prepared and pending live deployment.');
    return;
  }

  console.log('✅ Remote key file verified successfully over HTTPS!');

  if (validSubmitList.length === 0) {
    console.log('ℹ️ No new or changed URLs to submit. Fingerprint deduplication active.');
    return;
  }

  if (isSubmitMode) {
    console.log(`🚀 Sending ${validSubmitList.length} URLs to IndexNow endpoint...`);
    try {
      const res = await postIndexNow(payload);
      console.log(`📬 IndexNow response: HTTP ${res.status}`);
      if (res.status === 200 || res.status === 202) {
        console.log('✅ Submission accepted by IndexNow gateway.');
        console.log('ℹ️ [Notice]: Acceptance by API does NOT guarantee immediate crawl, indexing, or ranking boost.');

        // 更新历史记录
        const now = new Date().toISOString();
        for (const url of currentIndexableUrls) {
          const htmlPath = mapUrlToDistHtml(url);
          history.urls[url] = {
            fingerprint: getFileFingerprint(htmlPath),
            status: 'active',
            lastSubmitted: now,
          };
        }
        for (const url of deletedUrls) {
          history.urls[url] = {
            status: 'deleted',
            lastSubmitted: now,
          };
        }
        history.lastRun = now;
        fs.writeFileSync(historyFile, JSON.stringify(history, null, 2), 'utf8');
        fs.unlinkSync(pendingFile);
      } else {
        console.warn(`⚠️ IndexNow responded with unexpected status ${res.status}: ${res.body}`);
      }
    } catch (err) {
      console.error(`❌ IndexNow submission error: ${err.message}`);
      console.log('ℹ️ [Policy]: Build not interrupted. Errors recorded for subsequent retry.');
    }
  } else {
    console.log('ℹ️ Run with --submit to dispatch live HTTP request after deployment.');
  }
}

main().catch((err) => {
  console.error('IndexNow script caught error:', err);
  // 不中断构建流程
  process.exit(0);
});
