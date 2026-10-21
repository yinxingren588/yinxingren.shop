/**
 * 全局站点固定资料与基础配置
 * 统一读取，禁止在后续步骤中擅自修改或重新填入不同的品牌名、域名、AFF或核心关键词。
 * URL常量为纯字符串，不得包含大括号或Markdown符号。
 */

export const BRAND_NAME = '隐形人';
export const BRAND_NAME_EN = 'The Invisible'; // 本站英文展示名，非品牌官方注册英文名
export const SITE_URL = 'https://yinxingren.shop'; // 正式域名，不含末尾斜杠
export const OFFICIAL_URL = 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy'; // 完整AFF链接，完整保留Hash、Query与推广参数

export const PRIMARY_KEYWORD = '隐形人';
export const SECONDARY_KEYWORD = '隐形人官网';
export const TERTIARY_KEYWORD = '隐形人机场';
export const CORE_KEYWORDS = ['隐形人', '隐形人官网', '隐形人机场'] as const;

export const TELEGRAM_CHANNEL_URL = 'https://t.me/+diFXhmhTx-E4Mjc1'; // 官方频道链接
export const TELEGRAM_GROUP_URL = 'https://t.me/+YnHn1D4JK7c2Yjg1'; // 交流群链接

/**
 * 站点身份核验与认定记录
 * 规则：未确认官方身份时，本站默认定位为品牌信息展示、使用指引和第三方合作平台导航站。
 * 核验情况：已查验AFF推广落地页（《隐形人Invisible 线路检测》），未发现官方实体授权或自营背书证明。
 * 因此严格确立本站身份为：第三方合作与信息指引导航站。
 */
export const SITE_IDENTITY = {
  isOfficial: false, // 严格标记为非官方品牌站
  type: 'third_party_guide_navigation',
  typeName: '第三方合作与信息指引导航站',
  verificationDate: '2026-10-17',
  verificationSummary: '已检索AFF公开线路检测页面，确认无官方直接自营或法律授权文书。本站严格保持第三方导航与指引定位，绝不冒充官方。',
} as const;

/**
 * AFF推广声明
 * 规则：在有商业入口的页面，以简洁、可见的文字说明。
 */
export const AFF_DISCLOSURE_TEXT = '本站包含推广链接，通过相关链接完成订阅，本站可能获得佣金。实际价格、服务与售后以合作平台为准。';

/**
 * 站点综合元数据
 */
export const SITE_CONFIG = {
  brandName: BRAND_NAME,
  brandNameEn: BRAND_NAME_EN,
  siteUrl: SITE_URL,
  officialUrl: OFFICIAL_URL,
  primaryKeyword: PRIMARY_KEYWORD,
  secondaryKeyword: SECONDARY_KEYWORD,
  tertiaryKeyword: TERTIARY_KEYWORD,
  coreKeywords: CORE_KEYWORDS,
  telegramChannelUrl: TELEGRAM_CHANNEL_URL,
  telegramGroupUrl: TELEGRAM_GROUP_URL,
  identity: SITE_IDENTITY,
  disclosure: AFF_DISCLOSURE_TEXT,
  sitemapUrl: `${SITE_URL}/sitemap.xml`,
  robotsUrl: `${SITE_URL}/robots.txt`,
} as const;
