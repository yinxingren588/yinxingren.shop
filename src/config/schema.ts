import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from './site';
import { ROUTES } from './routes';
import { getSeoConfigByPath } from './seo';
import { FAQ_DATA } from '@/data/faqData';

/**
 * 结构化数据 (JSON-LD) 单一可信生成器
 * 
 * 规范要求：
 * 1. 首页输出：WebSite、WebPage、与可见 FAQ 一致的 FAQPage
 * 2. 首页不输出无意义的 BreadcrumbList
 * 3. 内页输出：WebPage 或 CollectionPage、以及与可见面包屑完全一致的 BreadcrumbList
 * 4. 404 页面严格不输出任何 JSON-LD
 * 5. 严禁虚构：Organization、SoftwareApplication、AggregateRating、Review、Offer 价格、全站搜索 SearchAction
 * 6. 所有 @id、url 必须基于 SITE_URL 生成，严禁 AFF、localhost 或 markdown 链接
 */
export function getPageJsonLd(pathname: string): object | null {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const route = ROUTES.find((r) => r.path === pathname || r.path === normalized);

  // 404 或未登记页面，严格返回 null，不输出任何 Schema
  if (!route || !route.indexable || route.id === 'not-found') {
    return null;
  }

  const seo = getSeoConfigByPath(pathname);
  if (!seo) {
    return null;
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    url: `${SITE_URL}/`,
    description: seo.description,
    inLanguage: 'zh-CN',
  };

  if (route.id === 'home') {
    // 首页输出：WebSite + WebPage + FAQPage
    const homeWebPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'zh-CN',
    };

    // 与页面实际可见的 8 条 FAQ 完全一致
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      url: `${SITE_URL}/`,
      isPartOf: { '@id': `${SITE_URL}/#webpage` },
      mainEntity: FAQ_DATA.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [websiteSchema, homeWebPageSchema, faqSchema],
    };
  }

  // 内页输出：WebPage/CollectionPage + BreadcrumbList
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': route.schemaType,
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'zh-CN',
  };

  const breadcrumbName = route.breadcrumbTitle || route.navLabel || seo.title;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${route.path}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbName,
        item: `${SITE_URL}${route.path}`,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [pageSchema, breadcrumbSchema],
  };
}
