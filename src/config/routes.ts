import { SITE_URL, SITE_IDENTITY } from './site';

/**
 * 统一路由条目定义
 * 作为全站路由、导航栏、SEO 元数据、结构化数据与 Sitemap 生成的单一可信数据源 (Single Source of Truth)
 */
export interface RouteItem {
  id: string;
  path: string;
  canonical: string;
  navLabel?: string;
  breadcrumbTitle?: string;
  title?: string;
  description?: string;
  schemaType: 'WebPage' | 'CollectionPage';
  indexable: boolean;
  hasActualContent: boolean;
  showAff: boolean;
  isNav?: boolean;
  /**
   * 只有在有可靠时间记录（如法律生效日、明确核验发布日）时输出真实日期；
   * 无法确定时严格为 undefined，Sitemap 自动省略 <lastmod>，绝不编造构建或伪造日期。
   */
  lastmod?: string;
}

/**
 * 全站统一路由登记表
 * 严格包含项目中已存在并获准建设的正式业务页面与 404 兜底路由
 */
export const REGISTERED_ROUTES: RouteItem[] = [
  {
    id: 'home',
    path: '/',
    canonical: `${SITE_URL}/`,
    navLabel: '首页',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: false,
    lastmod: SITE_IDENTITY.verificationDate, // 2026-10-17 站点定位与服务核验基线日期
  },
  {
    id: 'services',
    path: '/services/',
    canonical: `${SITE_URL}/services/`,
    navLabel: '服务介绍',
    breadcrumbTitle: '服务概览',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined, // 未设独立修订时间戳，严格省略
  },
  {
    id: 'advantages',
    path: '/advantages/',
    canonical: `${SITE_URL}/advantages/`,
    navLabel: '核心优势',
    breadcrumbTitle: '核心优势',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined,
  },
  {
    id: 'locations',
    path: '/locations/',
    canonical: `${SITE_URL}/locations/`,
    navLabel: '服务范围',
    breadcrumbTitle: '服务线路',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined,
  },
  {
    id: 'pricing',
    path: '/pricing/',
    canonical: `${SITE_URL}/pricing/`,
    navLabel: '订阅套餐',
    breadcrumbTitle: '套餐选型指南',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined,
  },
  {
    id: 'help',
    path: '/help/',
    canonical: `${SITE_URL}/help/`,
    navLabel: '帮助中心',
    breadcrumbTitle: '帮助中心',
    schemaType: 'CollectionPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined,
  },
  {
    id: 'downloads',
    path: '/downloads/',
    canonical: `${SITE_URL}/downloads/`,
    navLabel: '客户端下载',
    breadcrumbTitle: '客户端下载',
    schemaType: 'CollectionPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: false,
    lastmod: undefined,
  },
  {
    id: 'contact',
    path: '/contact/',
    canonical: `${SITE_URL}/contact/`,
    navLabel: '联系我们',
    breadcrumbTitle: '联系我们',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: true,
    isNav: true,
    lastmod: undefined,
  },
  {
    id: 'terms',
    path: '/terms/',
    canonical: `${SITE_URL}/terms/`,
    navLabel: '服务条款',
    breadcrumbTitle: '服务条款',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: false, // 法律政策页面整页 AFF 为 0
    isNav: false,
    lastmod: '2026-10-17', // 服务条款明确基线日期
  },
  {
    id: 'privacy',
    path: '/privacy/',
    canonical: `${SITE_URL}/privacy/`,
    navLabel: '隐私政策',
    breadcrumbTitle: '隐私政策',
    schemaType: 'WebPage',
    indexable: true,
    hasActualContent: true,
    showAff: false, // 隐私政策页面整页 AFF 为 0
    isNav: false,
    lastmod: '2026-10-17', // 隐私政策明确基线日期
  },
  {
    id: 'not-found',
    path: '/*',
    canonical: '',
    navLabel: '页面未找到',
    schemaType: 'WebPage',
    indexable: false, // 404 错误页禁止索引，严禁进入 Sitemap
    hasActualContent: false, // 错误页面，非正式业务内容
    showAff: false, // 404 页面整页 AFF 为 0
    isNav: false,
    lastmod: undefined,
  },
];

/**
 * 兼容引用的 ROUTES 别名
 */
export const ROUTES = REGISTERED_ROUTES;

/**
 * 动态提取允许搜索引擎索引的正式业务页面
 * 不写死数量，严格依据索引状态、Canonical 及内容真实性计算
 */
export function getIndexableRoutes(routes: RouteItem[] = REGISTERED_ROUTES): RouteItem[] {
  return routes.filter((route) => {
    // 必须为明确允许索引的页面（排除 noindex、404）
    if (!route.indexable) return false;
    // 必须为已有实际内容的正式页面（排除测试页、占位页、空页面）
    if (!route.hasActualContent) return false;
    // 排除含有通配符、hash、query 的非法路由
    if (route.path.includes('*') || route.path.includes('#') || route.path.includes('?')) return false;
    // 排除非正式域名的污染（如 localhost、example.com）
    if (route.canonical.includes('localhost') || route.canonical.includes('example.com')) return false;
    // Canonical 必须指向自身正式 URL
    const expectedCanonical = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    if (route.canonical !== expectedCanonical) return false;

    return true;
  });
}

/**
 * 提取主导航菜单路由项
 */
export function getNavRoutes(routes: RouteItem[] = REGISTERED_ROUTES): RouteItem[] {
  return routes.filter((route) => route.isNav);
}
