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

for (const p of pages) {
  const html = fs.readFileSync(path.join(distDir, p), 'utf8');
  const headerStart = html.indexOf('<header');
  const headerEnd = html.indexOf('</header>');
  const mainStart = html.indexOf('<main');
  const mainEnd = html.indexOf('</main>');
  const footerStart = html.indexOf('<footer');
  const footerEnd = html.indexOf('</footer>');

  const affMatches = [...html.matchAll(/<a\s+[^>]*href=["']https:\/\/varnexa\.invisibleaff\.com[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)];
  
  let inHeaderDesktop = 0;
  let inHeaderMobile = 0;
  let inMain = 0;
  let inFooter = 0;

  for (const m of affMatches) {
    const idx = m.index;
    if (idx >= headerStart && idx <= headerEnd) {
      // Check if inside hidden md:hidden or desktop
      const snippet = html.substring(headerStart, idx);
      if (snippet.includes('md:hidden') && (snippet.lastIndexOf('md:hidden') > snippet.lastIndexOf('hidden md:flex'))) {
        inHeaderMobile++;
      } else {
        inHeaderDesktop++;
      }
    } else if (idx >= mainStart && idx <= mainEnd) {
      inMain++;
    } else if (idx >= footerStart && idx <= footerEnd) {
      inFooter++;
    }
  }

  console.log(`${p.padEnd(24)} -> Desktop Nav: ${inHeaderDesktop}, Mobile Nav: ${inHeaderMobile}, Main Body: ${inMain}, Footer: ${inFooter}, Total: ${affMatches.length}`);
}
