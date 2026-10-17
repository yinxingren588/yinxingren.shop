import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');
const publicDir = path.resolve(rootDir, 'public');

async function main() {
  console.log('🚀 Starting pre-rendering static HTML, JSON-LD, Sitemap, and Robots...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run client build first!');
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  // 动态导入 SSR 入口模块与统一配置源
  const serverEntryPath = path.resolve(distSsrDir, 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error('dist-ssr/entry-server.js not found. Run SSR build first!');
  }
  const { render, SEO_CONFIGS, getPageJsonLd, ROUTES, SITE_URL } = await import(
    pathToFileURL(serverEntryPath).href
  );

  // 待预渲染的 10 个正式页面路由与 404 兜底路由
  const routesToRender = [
    { url: '/', file: 'index.html', key: 'home' },
    { url: '/services/', file: 'services/index.html', key: 'services' },
    { url: '/advantages/', file: 'advantages/index.html', key: 'advantages' },
    { url: '/locations/', file: 'locations/index.html', key: 'locations' },
    { url: '/pricing/', file: 'pricing/index.html', key: 'pricing' },
    { url: '/help/', file: 'help/index.html', key: 'help' },
    { url: '/downloads/', file: 'downloads/index.html', key: 'downloads' },
    { url: '/contact/', file: 'contact/index.html', key: 'contact' },
    { url: '/terms/', file: 'terms/index.html', key: 'terms' },
    { url: '/privacy/', file: 'privacy/index.html', key: 'privacy' },
    { url: '/non-existing-404-check/', file: '404.html', key: null }, // 触发 404
  ];

  for (const { url, file, key } of routesToRender) {
    console.log(`  -> Rendering [${url}] to [dist/${file}]...`);
    const { html: renderedHtml } = render(url);

    let html = template;

    // 1. 替换主要正文容器
    html = html.replace('<div id="root"></div>', `<div id="root">${renderedHtml}</div>`);

    // 2. 确保页面语言为 lang="zh-CN"
    html = html.replace(/<html[^>]*>/, '<html lang="zh-CN">');

    if (key && SEO_CONFIGS[key]) {
      const seo = SEO_CONFIGS[key];
      const jsonLd = getPageJsonLd(url);

      // 替换 Title
      html = html.replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`);

      // 替换 Description
      html = html.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${seo.description}" />`
      );

      // 替换 Keywords
      html = html.replace(
        /<meta name="keywords" content=".*?" \/>/,
        `<meta name="keywords" content="${seo.metaKeywords}" />`
      );

      // 替换 Robots
      html = html.replace(
        /<meta name="robots" content=".*?" \/>/,
        `<meta name="robots" content="${seo.robots}" />`
      );

      // 替换 Canonical
      html = html.replace(
        /<link rel="canonical" href=".*?" \/>/,
        `<link rel="canonical" href="${seo.canonical}" />`
      );

      // 替换 Open Graph
      html = html.replace(
        /<meta property="og:type" content=".*?" \/>/,
        `<meta property="og:type" content="${seo.ogType}" />`
      );
      html = html.replace(
        /<meta property="og:site_name" content=".*?" \/>/,
        `<meta property="og:site_name" content="${seo.ogSiteName}" />`
      );
      html = html.replace(
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${seo.ogTitle}" />`
      );
      html = html.replace(
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${seo.ogDescription}" />`
      );
      html = html.replace(
        /<meta property="og:url" content=".*?" \/>/,
        `<meta property="og:url" content="${seo.ogUrl}" />`
      );
      html = html.replace(
        /<meta property="og:image" content=".*?" \/>/,
        `<meta property="og:image" content="${seo.ogImage}" />`
      );
      html = html.replace(
        /<meta property="og:image:alt" content=".*?" \/>/,
        `<meta property="og:image:alt" content="${seo.ogImageAlt}" />`
      );

      // 替换 Twitter Card
      html = html.replace(
        /<meta name="twitter:card" content=".*?" \/>/,
        `<meta name="twitter:card" content="${seo.twitterCard}" />`
      );
      html = html.replace(
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${seo.twitterTitle}" />`
      );
      html = html.replace(
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${seo.twitterDescription}" />`
      );
      html = html.replace(
        /<meta name="twitter:image" content=".*?" \/>/,
        `<meta name="twitter:image" content="${seo.twitterImage}" />`
      );

      // 注入 JSON-LD 结构化数据 (单实例 id="json-ld-schema")
      if (jsonLd) {
        const jsonLdTag = `\n    <script type="application/ld+json" id="json-ld-schema">${JSON.stringify(
          jsonLd
        )}</script>\n  </head>`;
        html = html.replace('</head>', jsonLdTag);
      }
    } else {
      // 404 页面
      html = html.replace(/<title>.*?<\/title>/, `<title>404 页面未找到 | 隐形人 (The Invisible)</title>`);
      html = html.replace(
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="抱歉，您访问的页面不存在或已被移除。" />`
      );
      html = html.replace(
        /<meta name="robots" content=".*?" \/>/,
        `<meta name="robots" content="noindex, nofollow" />`
      );

      // 404 页面强制移除 Canonical、OG、Twitter、Keywords、JSON-LD
      html = html.replace(/\s*<link rel="canonical" href=".*?" \/>/g, '');
      html = html.replace(/\s*<meta name="keywords" content=".*?" \/>/g, '');
      html = html.replace(/\s*<meta property="og:[^"]+" content=".*?" \/>/g, '');
      html = html.replace(/\s*<meta name="twitter:[^"]+" content=".*?" \/>/g, '');
      html = html.replace(/\s*<script type="application\/ld\+json" id="json-ld-schema">.*?<\/script>/gs, '');
    }

    // 写入目标文件路径
    const targetFilePath = path.resolve(distDir, file);
    fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
    fs.writeFileSync(targetFilePath, html, 'utf8');
  }

  // ==========================================
  // 3. 动态生成 sitemap.xml
  // ==========================================
  console.log('🗺️ Generating dynamic sitemap.xml from ROUTES registry...');
  // 严格过滤：实际存在、允许索引、有实际内容且拥有正式 Canonical
  const sitemapRoutes = ROUTES.filter(
    (r) => r.indexable === true && r.hasActualContent === true && r.canonical && r.id !== 'not-found'
  );

  const urlEntries = sitemapRoutes
    .map((r) => {
      let entry = `  <url>\n    <loc>${r.canonical}</loc>`;
      if (r.lastmod) {
        entry += `\n    <lastmod>${r.lastmod}</lastmod>`;
      }
      entry += `\n  </url>`;
      return entry;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`✅ sitemap.xml generated with ${sitemapRoutes.length} indexable URLs`);

  // ==========================================
  // 4. 动态生成 robots.txt
  // ==========================================
  console.log('🤖 Generating robots.txt with official SITE_URL...');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf8');
  fs.writeFileSync(path.resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log(`✅ robots.txt generated successfully`);

  // 清理临时 SSR 产物目录
  fs.rmSync(distSsrDir, { recursive: true, force: true });
  console.log('🎉 Static pre-rendering and SEO asset generation finished with zero errors!');
}

main().catch((err) => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
