import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const pages = [
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

console.log('=== 逐页实际渲染的 AFF 按钮与外部链接审计 ===\n');

for (const page of pages) {
  const filePath = path.join(distDir, page);
  if (!fs.existsSync(filePath)) {
    console.log(`❌ 页面不存在: ${page}`);
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  console.log(`========================================`);
  console.log(`📄 页面: /${page.replace('index.html', '')}`);
  console.log(`========================================`);

  // 1. 查找所有包含 AFF 目标地址的 <a> 标签
  const affRegex = /<a\s+[^>]*href=["'](https:\/\/varnexa\.invisibleaff\.com[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  let count = 0;
  const affButtons = [];

  while ((match = affRegex.exec(html)) !== null) {
    count++;
    const fullTag = match[0];
    const url = match[1];
    const innerHtml = match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

    // 检查属性
    const targetMatch = fullTag.match(/target=["']([^"']*)["']/i);
    const relMatch = fullTag.match(/rel=["']([^"']*)["']/i);

    // 判断所处位置
    let position = '页面主体内容区';
    const beforeText = html.substring(Math.max(0, match.index - 500), match.index);
    if (beforeText.includes('<header') || beforeText.includes('fixed top-0') || beforeText.includes('aria-label="主导航"')) {
      if (beforeText.includes('md:hidden') || beforeText.includes('mobile-menu') || beforeText.includes('id="mobile-drawer"')) {
        position = '移动端导航抽屉 (Mobile Drawer)';
      } else {
        position = '桌面端主导航条 (Desktop Navbar)';
      }
    } else if (beforeText.includes('<footer') || beforeText.includes('border-t border-brand-border bg-brand-surface text-slate-400')) {
      position = '页脚 (Footer)';
    }

    affButtons.push({
      index: count,
      text: innerHtml,
      url,
      position,
      target: targetMatch ? targetMatch[1] : 'none',
      rel: relMatch ? relMatch[1] : 'none',
    });
  }

  console.log(`AFF 按钮总计: ${count} 个`);
  affButtons.forEach(b => {
    console.log(`  [#${b.index}] 位置: ${b.position} | 文案: "${b.text}" | target="${b.target}" | rel="${b.rel}"`);
  });

  // 2. 检查 Telegram 链接
  const tgRegex = /<a\s+[^>]*href=["'](https:\/\/t\.me[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let tgMatch;
  let tgCount = 0;
  const tgButtons = [];

  while ((tgMatch = tgRegex.exec(html)) !== null) {
    tgCount++;
    const fullTag = tgMatch[0];
    const url = tgMatch[1];
    const innerHtml = tgMatch[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const targetMatch = fullTag.match(/target=["']([^"']*)["']/i);
    const relMatch = fullTag.match(/rel=["']([^"']*)["']/i);

    tgButtons.push({
      index: tgCount,
      text: innerHtml,
      url,
      target: targetMatch ? targetMatch[1] : 'none',
      rel: relMatch ? relMatch[1] : 'none',
    });
  }

  if (tgCount > 0) {
    console.log(`\n  Telegram 链接: ${tgCount} 个 (不计入 AFF)`);
    tgButtons.forEach(b => {
      console.log(`    [TG #${b.index}] 文案: "${b.text}" | URL: ${b.url} | target="${b.target}" | rel="${b.rel}"`);
    });
  }

  console.log('');
}
