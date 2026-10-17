import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from './site';

export interface PageSeoConfig {
  id: string;
  path: string;
  canonical: string;
  title: string;
  description: string;
  targetKeywords: string[];
  metaKeywords: string;
  h1: string;
  ogType: 'website' | 'article';
  ogSiteName: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
  ogLocale: string;
  twitterCard: 'summary_large_image';
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  indexable: boolean;
  robots: string;
}

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * 全站 10 个正式路由的独立 SEO 单一可信数据源 (SSOT)
 * 严格依据项目固定资料、真实业务定位与人工可读规范编排
 */
export const SEO_CONFIGS: Record<string, PageSeoConfig> = {
  home: {
    id: 'home',
    path: '/',
    canonical: `${SITE_URL}/`,
    title: `${BRAND_NAME}｜服务介绍、套餐选择与使用指南 - ${BRAND_NAME_EN}`,
    description: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站，提供多协议特征混淆解析、节点选型考量、套餐方案指南与合作平台入口核对说明。`,
    targetKeywords: [BRAND_NAME, '隐形人官网', '网络工具配置', '出海网络指引', '节点选型指南'],
    metaKeywords: `${BRAND_NAME}, 隐形人官网, 网络工具配置, 出海网络指引, 节点选型指南`,
    h1: `${BRAND_NAME} - 专注高隐私网络与全球出海连接指引`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}｜服务介绍、套餐选择与使用指南 - ${BRAND_NAME_EN}`,
    ogDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站，提供多协议特征混淆解析、节点选型考量、套餐方案指南与合作平台入口核对说明。`,
    ogUrl: `${SITE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方网络信息指引与服务导航站`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}｜服务介绍、套餐选择与使用指南 - ${BRAND_NAME_EN}`,
    twitterDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站，提供多协议特征混淆解析、节点选型考量、套餐方案指南与合作平台入口核对说明。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  services: {
    id: 'services',
    path: '/services/',
    canonical: `${SITE_URL}/services/`,
    title: `${BRAND_NAME}服务介绍｜核心能力与配置使用流程 - ${BRAND_NAME_EN}`,
    description: `全面了解${BRAND_NAME}多协议特征混淆封装、跨海网络冗余容灾与细粒度分流能力，以及从选型、订阅到多端配置的完整使用流程。`,
    targetKeywords: [`${BRAND_NAME}服务介绍`, '协议特征混淆', '多路径冗余', '规则分流', '配置使用流程'],
    metaKeywords: `${BRAND_NAME}服务介绍, 协议特征混淆, 多路径冗余, 规则分流, 配置使用流程`,
    h1: `${BRAND_NAME}服务概览与协议分流指引`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}服务介绍｜核心能力与配置使用流程 - ${BRAND_NAME_EN}`,
    ogDescription: `全面了解${BRAND_NAME}多协议特征混淆封装、跨海网络冗余容灾与细粒度分流能力，以及从选型、订阅到多端配置的完整使用流程。`,
    ogUrl: `${SITE_URL}/services/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}服务介绍与协议分流`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}服务介绍｜核心能力与配置使用流程 - ${BRAND_NAME_EN}`,
    twitterDescription: `全面了解${BRAND_NAME}多协议特征混淆封装、跨海网络冗余容灾与细粒度分流能力，以及从选型、订阅到多端配置的完整使用流程。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  advantages: {
    id: 'advantages',
    path: '/advantages/',
    canonical: `${SITE_URL}/advantages/`,
    title: `${BRAND_NAME}核心优势｜选择价值与典型应用场景 - ${BRAND_NAME_EN}`,
    description: `深入解析${BRAND_NAME}在开发运维环境隔离、跨平台一致体验、多端设备协同与透明权责说明等维度的选择价值，助力跨境业务平稳运作。`,
    targetKeywords: [`${BRAND_NAME}核心优势`, '选择价值', '网络环境隔离', '开发多端协同', '跨境业务场景'],
    metaKeywords: `${BRAND_NAME}核心优势, 选择价值, 网络环境隔离, 开发多端协同, 跨境业务场景`,
    h1: `${BRAND_NAME}核心优势与选择价值解析`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}核心优势｜选择价值与典型应用场景 - ${BRAND_NAME_EN}`,
    ogDescription: `深入解析${BRAND_NAME}在开发运维环境隔离、跨平台一致体验、多端设备协同与透明权责说明等维度的选择价值，助力跨境业务平稳运作。`,
    ogUrl: `${SITE_URL}/advantages/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}核心优势与应用场景`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}核心优势｜选择价值与典型应用场景 - ${BRAND_NAME_EN}`,
    twitterDescription: `深入解析${BRAND_NAME}在开发运维环境隔离、跨平台一致体验、多端设备协同与透明权责说明等维度的选择价值，助力跨境业务平稳运作。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  locations: {
    id: 'locations',
    path: '/locations/',
    canonical: `${SITE_URL}/locations/`,
    title: `${BRAND_NAME}服务范围｜节点线路与地区选择参考 - ${BRAND_NAME_EN}`,
    description: `提供主流跨国出海网络地区考量指南与线路选择建议。具体可用线路、实时节点与网络拓扑请以合作平台客户端实际显示为准。`,
    targetKeywords: [`${BRAND_NAME}服务范围`, '节点线路参考', '地区选择指南', '跨境网络考量', '跨洋连接'],
    metaKeywords: `${BRAND_NAME}服务范围, 节点线路参考, 地区选择指南, 跨境网络考量, 跨洋连接`,
    h1: `${BRAND_NAME}服务范围与地区线路选择参考`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}服务范围｜节点线路与地区选择参考 - ${BRAND_NAME_EN}`,
    ogDescription: `提供主流跨国出海网络地区考量指南与线路选择建议。具体可用线路、实时节点与网络拓扑请以合作平台客户端实际显示为准。`,
    ogUrl: `${SITE_URL}/locations/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}服务范围与线路选择`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}服务范围｜节点线路与地区选择参考 - ${BRAND_NAME_EN}`,
    twitterDescription: `提供主流跨国出海网络地区考量指南与线路选择建议。具体可用线路、实时节点与网络拓扑请以合作平台客户端实际显示为准。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  pricing: {
    id: 'pricing',
    path: '/pricing/',
    canonical: `${SITE_URL}/pricing/`,
    title: `${BRAND_NAME}套餐选择与订阅指南｜周期与流量方案说明 - ${BRAND_NAME_EN}`,
    description: `客观整理${BRAND_NAME}周期订阅制与不限时流量包方案维度，提供设备数、流量消耗及场景选择参考。实时价格以合作平台为准。`,
    targetKeywords: [`${BRAND_NAME}套餐`, '订阅方案指南', '流量包选型', '周期计费', '合作平台价格'],
    metaKeywords: `${BRAND_NAME}套餐, 订阅方案指南, 流量包选型, 周期计费, 合作平台价格`,
    h1: `${BRAND_NAME}订阅套餐选型指南与方案解析`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}套餐选择与订阅指南｜周期与流量方案说明 - ${BRAND_NAME_EN}`,
    ogDescription: `客观整理${BRAND_NAME}周期订阅制与不限时流量包方案维度，提供设备数、流量消耗及场景选择参考。实时价格以合作平台为准。`,
    ogUrl: `${SITE_URL}/pricing/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}套餐选择与方案指南`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}套餐选择与订阅指南｜周期与流量方案说明 - ${BRAND_NAME_EN}`,
    twitterDescription: `客观整理${BRAND_NAME}周期订阅制与不限时流量包方案维度，提供设备数、流量消耗及场景选择参考。实时价格以合作平台为准。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  help: {
    id: 'help',
    path: '/help/',
    canonical: `${SITE_URL}/help/`,
    title: `${BRAND_NAME}帮助中心｜常见问题解答与快速上手排障 - ${BRAND_NAME_EN}`,
    description: `提供新手使用流程、订阅导入、系统时钟同步校验、分流规则配置及跨平台常见问题检索解答，助您快速排查网络故障。`,
    targetKeywords: [`${BRAND_NAME}帮助中心`, '配置指引', '时钟同步排查', '分流模式设置', '故障排查'],
    metaKeywords: `${BRAND_NAME}帮助中心, 配置指引, 时钟同步排查, 分流模式设置, 故障排查`,
    h1: `${BRAND_NAME}使用帮助与常见问题解答`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}帮助中心｜常见问题解答与快速上手排障 - ${BRAND_NAME_EN}`,
    ogDescription: `提供新手使用流程、订阅导入、系统时钟同步校验、分流规则配置及跨平台常见问题检索解答，助您快速排查网络故障。`,
    ogUrl: `${SITE_URL}/help/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}使用帮助与常见问题解答`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}帮助中心｜常见问题解答与快速上手排障 - ${BRAND_NAME_EN}`,
    twitterDescription: `提供新手使用流程、订阅导入、系统时钟同步校验、分流规则配置及跨平台常见问题检索解答，助您快速排查网络故障。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  downloads: {
    id: 'downloads',
    path: '/downloads/',
    canonical: `${SITE_URL}/downloads/`,
    title: `${BRAND_NAME}客户端获取与多平台配置说明 - ${BRAND_NAME_EN}`,
    description: `汇集 Windows、macOS、iOS 与 Android 多平台客户端获取指引及配置说明。各平台实际支持情况与软件下载以合作平台说明为准。`,
    targetKeywords: [`${BRAND_NAME}客户端`, '跨平台配置', 'Windows客户端', 'macOS配置', '手机端获取'],
    metaKeywords: `${BRAND_NAME}客户端, 跨平台配置, Windows客户端, macOS配置, 手机端获取`,
    h1: `客户端获取与多平台配置指引`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `${BRAND_NAME}客户端获取与多平台配置说明 - ${BRAND_NAME_EN}`,
    ogDescription: `汇集 Windows、macOS、iOS 与 Android 多平台客户端获取指引及配置说明。各平台实际支持情况与软件下载以合作平台说明为准。`,
    ogUrl: `${SITE_URL}/downloads/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}客户端获取与平台说明`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `${BRAND_NAME}客户端获取与多平台配置说明 - ${BRAND_NAME_EN}`,
    twitterDescription: `汇集 Windows、macOS、iOS 与 Android 多平台客户端获取指引及配置说明。各平台实际支持情况与软件下载以合作平台说明为准。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  contact: {
    id: 'contact',
    path: '/contact/',
    canonical: `${SITE_URL}/contact/`,
    title: `联系我们与支持渠道｜Telegram官方社群 - ${BRAND_NAME_EN}`,
    description: `通过 Telegram 官方频道与交流群获取网络维护通告与技术讨论。本站不设虚假表单，账户充值与工单请前往合作平台查找客服。`,
    targetKeywords: [`${BRAND_NAME}联系方式`, 'Telegram官方频道', 'Telegram交流群', '客户服务通道', '支持渠道'],
    metaKeywords: `${BRAND_NAME}联系方式, Telegram官方频道, Telegram交流群, 客户服务通道, 支持渠道`,
    h1: `联系支持与沟通渠道说明`,
    ogType: 'website',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `联系我们与支持渠道｜Telegram官方社群 - ${BRAND_NAME_EN}`,
    ogDescription: `通过 Telegram 官方频道与交流群获取网络维护通告与技术讨论。本站不设虚假表单，账户充值与工单请前往合作平台查找客服。`,
    ogUrl: `${SITE_URL}/contact/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}联系我们与支持渠道`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `联系我们与支持渠道｜Telegram官方社群 - ${BRAND_NAME_EN}`,
    twitterDescription: `通过 Telegram 官方频道与交流群获取网络维护通告与技术讨论。本站不设虚假表单，账户充值与工单请前往合作平台查找客服。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  terms: {
    id: 'terms',
    path: '/terms/',
    canonical: `${SITE_URL}/terms/`,
    title: `服务条款与使用协议 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    description: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站服务条款，明确第三方合作定位、推广链接佣金披露、用户合规义务与理性免责声明。`,
    targetKeywords: [`${BRAND_NAME}服务条款`, '使用协议', '第三方声明', '推广链接披露', '合规说明'],
    metaKeywords: `${BRAND_NAME}服务条款, 使用协议, 第三方声明, 推广链接披露, 合规说明`,
    h1: `服务条款与使用协议`,
    ogType: 'article',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `服务条款与使用协议 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站服务条款，明确第三方合作定位、推广链接佣金披露、用户合规义务与理性免责声明。`,
    ogUrl: `${SITE_URL}/terms/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}服务条款与使用协议`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `服务条款与使用协议 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    twitterDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）第三方信息指引与服务导航站服务条款，明确第三方合作定位、推广链接佣金披露、用户合规义务与理性免责声明。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },

  privacy: {
    id: 'privacy',
    path: '/privacy/',
    canonical: `${SITE_URL}/privacy/`,
    title: `隐私政策与数据保护说明 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    description: `${BRAND_NAME}（${BRAND_NAME_EN}）隐私政策，详尽说明前端无追踪、无 Cookie、无输入表单的设计原则，以及外链跳转与 Web 服务器协议日志的技术边界。`,
    targetKeywords: [`${BRAND_NAME}隐私政策`, '数据保护说明', '前端零收集', 'Cookie声明', '服务器日志'],
    metaKeywords: `${BRAND_NAME}隐私政策, 数据保护说明, 前端零收集, Cookie声明, 服务器日志`,
    h1: `隐私政策与数据保护说明`,
    ogType: 'article',
    ogSiteName: `${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogTitle: `隐私政策与数据保护说明 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    ogDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）隐私政策，详尽说明前端无追踪、无 Cookie、无输入表单的设计原则，以及外链跳转与 Web 服务器协议日志的技术边界。`,
    ogUrl: `${SITE_URL}/privacy/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${BRAND_NAME}隐私政策与数据保护说明`,
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    twitterTitle: `隐私政策与数据保护说明 - ${BRAND_NAME} (${BRAND_NAME_EN})`,
    twitterDescription: `${BRAND_NAME}（${BRAND_NAME_EN}）隐私政策，详尽说明前端无追踪、无 Cookie、无输入表单的设计原则，以及外链跳转与 Web 服务器协议日志的技术边界。`,
    twitterImage: DEFAULT_OG_IMAGE,
    indexable: true,
    robots: 'index, follow',
  },
};

/**
 * 根据路径获取对应 SEO 配置
 */
export function getSeoConfigByPath(pathname: string): PageSeoConfig | null {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (normalized === '/') return SEO_CONFIGS.home;
  const key = normalized.replace(/^\/|\/$/g, '');
  return SEO_CONFIGS[key] || null;
}
