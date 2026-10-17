import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

function walk(dir) {
  let res = [];
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      res.push(...walk(p));
    } else if (/\.(tsx?|jsx?|html|json)$/.test(f)) {
      res.push(p);
    }
  }
  return res;
}

console.log('=== 检查 "官网" 与 "官方认证" 的使用情况 ===');
const files = walk(srcDir);
let count = 0;
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('官网') || line.includes('官方认证')) {
      console.log(`${path.relative(rootDir, file)}:${idx + 1}: ${line.trim()}`);
      count++;
    }
  });
}
console.log(`\n总计匹配: ${count} 处`);
