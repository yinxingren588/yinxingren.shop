import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';
import { SEO_CONFIGS, getSeoConfigByPath } from './config/seo';
import { getPageJsonLd } from './config/schema';
import { ROUTES } from './config/routes';
import { SITE_URL } from './config/site';

/**
 * SSR 预渲染入口函数
 * 接受请求 URL，使用 StaticRouter 渲染完整的页面 HTML 结构，确保预渲染内容与客户端水合数据完全一致
 */
export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );

  return { html };
}

export { SEO_CONFIGS, getSeoConfigByPath, getPageJsonLd, ROUTES, SITE_URL };
