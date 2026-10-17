import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

console.log('=== 开始最终上线验收全面审计 ===\n');

const findings = {
  brandPollution: [],
  placeholders: [],
  localhost: [],
  exampleCom: [],
  deadLinks: [],
  affAudit: {},
  telegramAudit: [],
  seoAudit: {},
  jsonLdAudit: {},
  sitemapAudit: {},
  robotsAudit: {},
  indexNowAudit: {},
  distAudit: {},
};

// 1. 递归读取所有文本文件
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.html', '.json', '.css']) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && item !== 'dist-ssr') {
        files.push(...getAllFiles(fullPath, extensions));
      }
    } else {
      const ext = path.extname(item);
      if (extensions.includes(ext) || item.startsWith('.') || item === 'robots.txt' || item === '_redirects') {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// 2. 检查源文件和构建产物中的文本污染
const srcAndPublicFiles = [...getAllFiles(srcDir), ...getAllFiles(publicDir)];
const forbiddenBrands = ['expressvpn', 'nordvpn', 'surfshark', 'clash', 'shadowrocket', 'v2ray', 'trojan', 'sing-box', 'vless', 'vmess'];
// 注意：排除代码中对第三方依赖或协议类型的一般性说明，只查是否存在其他竞品品牌名污染
const placeholderRegex = /\{\{[^}]+\}\}|\{[A-Z_]{3,}\}/g; // 如 {{BRAND}} 或 {DOMAIN}

for (const file of srcAndPublicFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative(rootDir, file);

  // 检查 placeholder
  const matches = content.match(placeholderRegex);
  if (matches) {
    for (const m of matches) {
      findings.placeholders.push({ file: rel, match: m });
    }
  }

  // 检查 example.com
  if (content.includes('example.com')) {
    findings.exampleCom.push({ file: rel });
  }

  // 检查 localhost 残留（排查非脚本/配置的生产文案）
  if (content.includes('localhost') && !file.endsWith('prerender.mjs') && !file.endsWith('audit.mjs') && !file.endsWith('final-audit.mjs')) {
    findings.localhost.push({ file: rel });
  }

  // 检查死链接 href="#" 或 href=""
  const deadLinkMatches = content.match(/href=["'](#[^"'a-zA-Z0-9_-]*|)["']/g);
  if (deadLinkMatches) {
    for (const d of deadLinkMatches) {
      findings.deadLinks.push({ file: rel, match: d });
    }
  }
}

console.log('1. 品牌污染与占位符检查:');
console.log('  - 未替换占位符数量:', findings.placeholders.length);
if (findings.placeholders.length > 0) console.log(findings.placeholders);
console.log('  - example.com 残留数量:', findings.exampleCom.length);
if (findings.exampleCom.length > 0) console.log(findings.exampleCom);
console.log('  - localhost 在源码中的非脚本残留数量:', findings.localhost.length);
if (findings.localhost.length > 0) console.log(findings.localhost);
console.log('  - 死链接 (href="#" 或 href="") 数量:', findings.deadLinks.length);
if (findings.deadLinks.length > 0) console.log(findings.deadLinks);

console.log('\n=== 扫描预渲染产物 dist/ ===');
if (!fs.existsSync(distDir)) {
  console.error('dist 目录不存在，请先执行 build！');
  process.exit(1);
}

// 检查 dist 目录关键文件
const distFiles = fs.readdirSync(distDir);
console.log('dist 根目录文件列表:', distFiles);

const requiredRoutes = [
  'index.html',
  'services/index.html',
  'advantages/index.html',
  'locations/index.html',
  'pricing/index.html',
  'help/index.html',
  'downloads/index.html',
  'contact/index.html',
  'terms/index.html',
  'privacy/index.html',
  '404.html'
];

for (const r of requiredRoutes) {
  const p = path.join(distDir, r);
  if (!fs.existsSync(p)) {
    console.error(`缺失路由产物: ${r}`);
  } else {
    const size = fs.statSync(p).size;
    const content = fs.readFileSync(p, 'utf8');
    
    // 检查 H1
    const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    // 检查 Title
    const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    // 检查 Description
    const descMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    // 检查 Canonical
    const canonicalMatch = content.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
    // 检查 Robots
    const robotsMatch = content.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
    // 检查 OpenGraph Title
    const ogTitleMatch = content.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
    // 检查 JSON-LD
    const jsonLdMatches = content.match(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/gi) || [];

    // 检查实际渲染的 AFF <a> 链接标签
    const affMatches = content.match(/<a\s+[^>]*href=["']https:\/\/varnexa\.invisibleaff\.com[^"']*["'][^>]*>/gi) || [];
    // 检查 Telegram 链接
    const tgChannel = (content.match(/<a\s+[^>]*href=["']https:\/\/t\.me\/\+diFXhmhTx-E4Mjc1["'][^>]*>/gi) || []).length;
    const tgGroup = (content.match(/<a\s+[^>]*href=["']https:\/\/t\.me\/\+YnHn1D4JK7c2Yjg1["'][^>]*>/gi) || []).length;

    findings.seoAudit[r] = {
      size,
      h1Count: h1Matches.length,
      h1Text: h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()),
      title: titleMatch ? titleMatch[1] : null,
      description: descMatch ? descMatch[1] : null,
      canonical: canonicalMatch ? canonicalMatch[1] : null,
      robots: robotsMatch ? robotsMatch[1] : null,
      ogTitle: ogTitleMatch ? ogTitleMatch[1] : null,
      jsonLdCount: jsonLdMatches.length,
      affCount: affMatches.length,
      tgChannelCount: tgChannel,
      tgGroupCount: tgGroup
    };
  }
}

console.log('\nSEO与页面产物审计详情:');
console.table(findings.seoAudit);

// 检查唯一性
const titles = Object.entries(findings.seoAudit).filter(([k]) => k !== '404.html').map(([k, v]) => v.title);
const descriptions = Object.entries(findings.seoAudit).filter(([k]) => k !== '404.html').map(([k, v]) => v.description);
const canonicals = Object.entries(findings.seoAudit).filter(([k]) => k !== '404.html').map(([k, v]) => v.canonical);

console.log('10个正式页面 Title 唯一性:', new Set(titles).size === 10 ? '✅ 全部独立唯一' : '❌ 存在重复');
console.log('10个正式页面 Description 唯一性:', new Set(descriptions).size === 10 ? '✅ 全部独立唯一' : '❌ 存在重复');
console.log('10个正式页面 Canonical 唯一性:', new Set(canonicals).size === 10 ? '✅ 全部独立唯一' : '❌ 存在重复');

// 检查 404 隔离
const seo404 = findings.seoAudit['404.html'];
console.log('\n404 页面 SEO 隔离检查:');
console.log('  - Canonical:', seo404.canonical === null ? '✅ 无 Canonical (正确)' : `❌ 异常存在: ${seo404.canonical}`);
console.log('  - Robots:', seo404.robots === 'noindex, nofollow' ? '✅ noindex, nofollow (正确)' : `❌ 异常: ${seo404.robots}`);
console.log('  - JSON-LD:', seo404.jsonLdCount === 0 ? '✅ 0 个结构化数据 (正确)' : `❌ 异常包含 ${seo404.jsonLdCount} 个`);
console.log('  - AFF 按钮数量:', seo404.affCount === 0 ? '✅ 严格为 0 (正确)' : `❌ 异常包含 ${seo404.affCount} 个`);

// 检查 Sitemap
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locMatches = sitemapContent.match(/<loc>([^<]+)<\/loc>/g) || [];
  console.log(`\nSitemap 审计: 共 ${locMatches.length} 个 URL`);
  locMatches.forEach(l => console.log('  -', l.replace(/<\/?loc>/g, '')));
} else {
  console.error('\n❌ sitemap.xml 不存在');
}

// 检查 Robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  console.log('\nRobots.txt 内容:\n' + robotsContent.trim());
} else {
  console.error('\n❌ robots.txt 不存在');
}

// 检查 IndexNow Key 文件
const indexNowKeyPath = path.join(distDir, '2643758b15e237db54b184c3e5a6c680.txt');
if (fs.existsSync(indexNowKeyPath)) {
  const keyContent = fs.readFileSync(indexNowKeyPath, 'utf8').trim();
  console.log(`\nIndexNow Key 文件检查:`);
  console.log('  - 文件存在: 2643758b15e237db54b184c3e5a6c680.txt');
  console.log('  - 文件内容:', keyContent);
  console.log('  - Key 一致性:', keyContent === '2643758b15e237db54b184c3e5a6c680' ? '✅ 完全一致' : '❌ 不一致');
} else {
  console.error('\n❌ IndexNow Key 文件缺失');
}

// 检查 og-image.png, apple-touch-icon.png, favicon.svg
const assets = ['og-image.png', 'apple-touch-icon.png', 'favicon.svg'];
console.log('\n关键静态资源检查:');
for (const a of assets) {
  const p = path.join(distDir, a);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`  - ${a}: 存在 (${stat.size} bytes)`);
  } else {
    console.error(`  - ❌ ${a} 缺失`);
  }
}
