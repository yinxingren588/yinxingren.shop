import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoConfigByPath } from '@/config/seo';
import { getPageJsonLd } from '@/config/schema';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

/**
 * 客户端路由切换时同步更新文档 HEAD 标签与结构化数据 (JSON-LD)
 * 
 * 规范要求：
 * 1. 10 个正式页面更新 Title、Description、Keywords、Canonical、OG 与 Twitter Card，设置 index, follow
 * 2. 404 页面更新独立 Title，设置 noindex, nofollow，且坚决不输出 Canonical、OG、Twitter Card 与 JSON-LD
 * 3. 语言始终保持 lang="zh-CN"
 * 4. 结构化数据采用单实例维护 (#json-ld-schema)，避免与预渲染重复追加
 */
export function useRouteSeo() {
  const location = useLocation();

  useEffect(() => {
    // 统一设置 HTML lang 声明
    document.documentElement.lang = 'zh-CN';

    const pathname = location.pathname;
    const config = getSeoConfigByPath(pathname);
    const jsonLd = getPageJsonLd(pathname);

    // 辅助函数：查找或创建 meta 标签
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string | null) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (content === null) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 辅助函数：设置或移除 canonical 标签
    const setCanonicalTag = (url: string | null) => {
      let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (url === null) {
        if (el) el.remove();
        return;
      }
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      el.setAttribute('href', url);
    };

    // 辅助函数：单实例管理 JSON-LD 标签
    const setJsonLdScript = (schemaData: object | null) => {
      let script = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
      if (!schemaData) {
        if (script) script.remove();
        return;
      }
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    };

    if (config) {
      // 10 个正式页面
      document.title = config.title;
      setMetaTag('name', 'description', config.description);
      setMetaTag('name', 'keywords', config.metaKeywords);
      setMetaTag('name', 'robots', config.robots);
      setCanonicalTag(config.canonical);

      // Open Graph
      setMetaTag('property', 'og:type', config.ogType);
      setMetaTag('property', 'og:site_name', config.ogSiteName);
      setMetaTag('property', 'og:title', config.ogTitle);
      setMetaTag('property', 'og:description', config.ogDescription);
      setMetaTag('property', 'og:url', config.ogUrl);
      setMetaTag('property', 'og:image', config.ogImage);
      setMetaTag('property', 'og:image:width', String(config.ogImageWidth));
      setMetaTag('property', 'og:image:height', String(config.ogImageHeight));
      setMetaTag('property', 'og:image:alt', config.ogImageAlt);
      setMetaTag('property', 'og:locale', config.ogLocale);

      // Twitter Card
      setMetaTag('name', 'twitter:card', config.twitterCard);
      setMetaTag('name', 'twitter:title', config.twitterTitle);
      setMetaTag('name', 'twitter:description', config.twitterDescription);
      setMetaTag('name', 'twitter:image', config.twitterImage);

      // JSON-LD 结构化数据注入
      setJsonLdScript(jsonLd);
    } else {
      // 404 页面未找到
      document.title = `404 页面未找到 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
      setMetaTag('name', 'description', '抱歉，您访问的页面不存在或已被移除。');
      setMetaTag('name', 'keywords', null);
      setMetaTag('name', 'robots', 'noindex, nofollow');

      // 404 严格禁止输出 Canonical、OG、Twitter Card 与 JSON-LD
      setCanonicalTag(null);
      setMetaTag('property', 'og:type', null);
      setMetaTag('property', 'og:site_name', null);
      setMetaTag('property', 'og:title', null);
      setMetaTag('property', 'og:description', null);
      setMetaTag('property', 'og:url', null);
      setMetaTag('property', 'og:image', null);
      setMetaTag('property', 'og:image:width', null);
      setMetaTag('property', 'og:image:height', null);
      setMetaTag('property', 'og:image:alt', null);
      setMetaTag('property', 'og:locale', null);

      setMetaTag('name', 'twitter:card', null);
      setMetaTag('name', 'twitter:title', null);
      setMetaTag('name', 'twitter:description', null);
      setMetaTag('name', 'twitter:image', null);

      setJsonLdScript(null);
    }
  }, [location.pathname]);
}
