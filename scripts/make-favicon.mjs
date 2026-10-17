import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const logoJpgPath = path.join(rootDir, 'public', 'logo.jpg');
const jpgBuffer = fs.readFileSync(logoJpgPath);
const base64Data = jpgBuffer.toString('base64');
const dataUri = `data:image/jpeg;base64,${base64Data}`;

// 生成包含圆角白色衬底与 Logo 图像的 SVG Favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <clipPath id="logo-clip">
      <rect width="512" height="512" rx="96" />
    </clipPath>
  </defs>
  <rect width="512" height="512" rx="96" fill="#FFFFFF"/>
  <image href="${dataUri}" width="512" height="512" clip-path="url(#logo-clip)" />
</svg>
`;

fs.writeFileSync(path.join(rootDir, 'public', 'favicon.svg'), svgContent, 'utf8');
console.log('✅ public/favicon.svg 已成功更新，内嵌高清 Logo 图像！');
