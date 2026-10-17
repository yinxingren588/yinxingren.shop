import fs from 'node:fs';

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const robots = fs.readFileSync('dist/robots.txt', 'utf8');

console.log('=== SITEMAP & ROBOTS VERIFICATION ===');
console.log('sitemap.xml has localhost:', sitemap.includes('localhost'));
console.log('sitemap.xml has AFF:', sitemap.includes('invisibleaff') || sitemap.includes('JF4seZUy'));
console.log('sitemap.xml has query params/hash:', sitemap.includes('?') || sitemap.includes('#'));
console.log('robots.txt has localhost:', robots.includes('localhost'));
console.log('robots.txt has correct Sitemap line:', robots.includes('Sitemap: https://yinxingren.shop/sitemap.xml'));

const htmlFiles = [
  'dist/index.html',
  'dist/services/index.html',
  'dist/advantages/index.html',
  'dist/locations/index.html',
  'dist/pricing/index.html',
  'dist/help/index.html',
  'dist/downloads/index.html',
  'dist/contact/index.html',
  'dist/terms/index.html',
  'dist/privacy/index.html',
];

console.log('\n=== JSON-LD SCHEMA VERIFICATION ===');
for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
  if (!match) {
    console.error(`ERROR: No JSON-LD found in ${file}`);
    continue;
  }
  const json = JSON.parse(match[1]);
  const jsonStr = JSON.stringify(json);
  const types = json['@graph'].map((g) => g['@type']).join(', ');
  const hasLocalhost = jsonStr.includes('localhost');
  const hasAff = jsonStr.includes('invisibleaff') || jsonStr.includes('JF4seZUy');
  const hasMarkdown = /\[.*?\]\(.*?\)/.test(jsonStr);
  console.log(
    file.replace('dist/', '').padEnd(22),
    'Types:', types.padEnd(35),
    'Clean:', !hasLocalhost && !hasAff && !hasMarkdown
  );
}

const c404 = fs.readFileSync('dist/404.html', 'utf8');
console.log('\n=== 404 VERIFICATION ===');
console.log('404 has ld+json:', c404.includes('application/ld+json'));
console.log('404 has canonical:', c404.includes('canonical'));
console.log('404 has og:tags:', c404.includes('og:'));
console.log('404 has twitter:tags:', c404.includes('twitter:'));
console.log('404 has noindex:', c404.includes('noindex, nofollow'));
