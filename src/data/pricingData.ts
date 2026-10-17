/**
 * 套餐与方案选型指南统一数据源
 * 
 * 数据核验记录：
 * - 来源 URL：https://varnexa.invisibleaff.com/#/?code=JF4seZUy
 * - 核验日期：2026-10-17
 * - 核验结论：已完整录入官方最新 9 大正式配套（6 款周期订阅套餐 + 3 款一次性买断永不过期流量包）的规格、流量、价格与权益。
 * - 真实性规范：价格与规格全部严格基于官方发布信息呈现，不编造虚假性能，标注“套餐、价格与活动以合作平台当前显示为准”。
 * - 推算与虚构声明：不存在任何按规律自行推算的其他周期价格，不虚构折扣、原价或虚假促销。
 */

export interface PricingPlanDetail {
  text: string;
}

export interface PricingPlan {
  id: string;
  category: 'subscription' | 'onetime';
  categoryName: '周期订阅' | '一次性买断';
  badge: '主推套餐' | '推荐选择';
  isFeatured?: boolean;
  name: string;
  emoji: string;
  subtitle: string;
  price: string;
  period: '/ 年' | '/ 月' | '/ 一次性';
  availableCycles: string;
  monthlyTraffic: string;
  trafficLabel?: string;
  speed: string;
  devices: string;
  billingCycles: string[];
  highlightTag: string;
  details: string[];
}

export interface SelectionDimension {
  id: string;
  dimensionName: string;
  subtitle: string;
  iconName: string;
  points: {
    title: string;
    description: string;
    tag?: string;
  }[];
}

export interface DecisionProfile {
  name: string;
  targetRole: string;
  trafficAdvice: string;
  deviceAdvice: string;
  cycleAdvice: string;
  summary: string;
}

export const PRICING_VERIFICATION = {
  sourceUrl: 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy',
  verificationDate: '2026-10-17',
  isVerifiedRealtimeData: true,
  reason: '全套 9 大正式套餐规格与价格数据已根据合作平台收银台最新上架凭据完成核准。',
  complianceNotice: '套餐、价格与实时活动以合作平台当前显示为准。',
  ctaText: '前往合作平台查看当前套餐',
} as const;

/**
 * 官方 9 大正式核验配套规格
 */
export const OFFICIAL_PLANS: PricingPlan[] = [
  // 1. 星耀风暴
  {
    id: 'star-storm',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '主推套餐',
    isFeatured: true,
    name: '星耀风暴 365天不熄 ⚡',
    emoji: '⚡',
    subtitle: '适合小流量/新手用户，年付折算约 8 元/月',
    price: '¥109.00',
    period: '/ 年',
    availableCycles: '年付',
    monthlyTraffic: '80GB/月',
    trafficLabel: '每月 80GB 高速流量',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['年付'],
    highlightTag: '年付超值推荐',
    details: [
      '适合小流量/新手用户，年付折算约 8 元/月',
      '80GB/月高速流量（全节点 x1 计费倍率，晚高峰不限速）',
      '购买日起算，每 30 天自动刷新流量配额',
      '全线低延迟专线接入，单节点峰值最高 2.5Gbps',
      '原生 IP 支持，兼容主流流媒体平台与 AI 协作工具',
      '不限制同时使用客户端数量，多设备自由漫游',
    ],
  },
  // 2. 白银纪元
  {
    id: 'silver-era',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    name: '白银纪元 👑',
    emoji: '👑',
    subtitle: '每月约 144GB 高速可用流量，满足日常多端深度使用',
    price: '¥24.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '144GB/月',
    trafficLabel: '每月 144GB 可用流量',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '刚需主力标配',
    details: [
      '每月提供约 144GB 高速可用流量，全时极速',
      '满足学术文献、高清远程会议与日常出海工作需求',
      '云端多链路即时优化，全链路专线架构，全节点 1x 计费',
      '低延迟支持 GitHub Copilot、ChatGPT 4 等开发者工具',
      '多国区域节点可选，不限制在线设备数，商务家庭优选',
    ],
  },
  // 3. 黄金序列
  {
    id: 'gold-sequence',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    name: '黄金序列 💥',
    emoji: '💥',
    subtitle: '每月 360GB 高速流量，搭配中高频视讯与协作，主力首选',
    price: '¥48.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '360GB/月',
    trafficLabel: '每月 360GB 高速流量',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '高频出海首选',
    details: [
      '每月 360GB 高速流量，适合中高频视讯与出海业务团队',
      'BGP 三网智能优化 + 专线出口，晚高峰稳定优先',
      '专线不限速，支持 4K/8K 超清流媒体与大数据传输',
      '多端平滑漫游，全天候平稳应对高并发工作流',
    ],
  },
  // 4. 铂金至臻
  {
    id: 'platinum-supreme',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    name: '铂金至臻 🔱',
    emoji: '🔱',
    subtitle: '每月包含 750GB 高速流量，彻底告别流量焦虑',
    price: '¥105.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '750GB/月',
    trafficLabel: '每月 750GB 充足配额',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '大流量专业版',
    details: [
      '每月包含 750GB 高速可用流量，适合高频大文件交互',
      'BGP 多线融合调度 + 专线级网络出口，带宽充裕',
      '全节点 1x 计费不虚标，流媒体与多平台全端解锁',
      '全天候高优先级容灾备用线路通道支持',
    ],
  },
  // 5. 钻石穹顶
  {
    id: 'diamond-zenith',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    name: '钻石穹顶 💎',
    emoji: '💎',
    subtitle: '每月提供 1.6TB 超大流量池，适合团队高并发使用',
    price: '¥185.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '1.6TB/月',
    trafficLabel: '每月 1600GB 超大流量池',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '企业团队首选',
    details: [
      '每月提供 1600GB 超大流量池，适合团队协作与高吞吐需求',
      '企业级 BGP 智能路由 + 专线出口，全程不限速不虚标',
      '1.6TB 超大可用带宽，跨境电商与海外自媒体团队必备',
      '支持多台设备并发高速在线，视讯流媒体顺畅播放',
    ],
  },
  // 6. 王者定制版
  {
    id: 'king-custom',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    name: '王者定制版 ✈️',
    emoji: '✈️',
    subtitle: '商业级独立带宽解决方案，500GB/月独立带宽调度',
    price: '¥680.00',
    period: '/ 月',
    availableCycles: '月付',
    monthlyTraffic: '500GB/月',
    trafficLabel: '500GB/月 独立带宽',
    speed: '不限速',
    devices: '不限设备',
    billingCycles: ['月付'],
    highlightTag: '商业级独享通道',
    details: [
      '顶配商业级网络解决方案，500GB/月 独立调度带宽',
      '独立通道隔离保障，保证高净值高并发业务丝滑顺畅',
      '专属服务响应，全程高速不限速，满足极致连通要求',
    ],
  },
  // 7. 一次性小流量
  {
    id: 'onetime-small',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    name: '一次性小流量 🪐',
    emoji: '🪐',
    subtitle: '一次性买断 160GB，无时间限制，终身备用安全气囊',
    price: '¥229.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '160GB 永久',
    trafficLabel: '160GB 独立买断流量（永不过期）',
    speed: '不限速',
    devices: '限 1 台设备',
    billingCycles: ['一次性'],
    highlightTag: '买断备用首选',
    details: [
      '一次性买断 160GB，无时间限制，永不过期的网络备用安全气囊',
      '告别月租续费焦虑，用多少扣多少，无需按月重复订阅',
      '独立买断区专属节点，严格限制 1 台设备，保证纯净不挤兑',
      '全节点 1x 计费，支持全协议跨端接入',
    ],
  },
  // 8. 一次性标准流量包
  {
    id: 'onetime-standard',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    name: '一次性标准流量包 🌀',
    emoji: '🌀',
    subtitle: '420GB 独立买断流量，没有过期时间，海外出差商旅黄金搭档',
    price: '¥549.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '420GB 永久',
    trafficLabel: '420GB 独立买断流量（永不过期）',
    speed: '不限速',
    devices: '支持 2 台设备',
    billingCycles: ['一次性'],
    highlightTag: '商旅出差搭档',
    details: [
      '420GB 独立买断流量，没有过期时间，出海差旅长期无忧',
      '进阶专线带宽保障，支持 2 台设备同时在线，手机电脑无缝同步',
      '保证晚高峰视讯与会议不卡顿，追剧、办公、开会全能打',
      '把预算花在刀刃上，永不过期的专线流量，比频繁续费更省心',
    ],
  },
  // 9. 一次性精英流量包
  {
    id: 'onetime-elite',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    name: '一次性精英流量包 🌊',
    emoji: '🌊',
    subtitle: '1000GB (1TB) 旗舰独享买断流量，永不过期',
    price: '¥1199.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '1.0TB 永久',
    trafficLabel: '1000GB 旗舰独享流量（永不过期）',
    speed: '不限速',
    devices: '支持 3 台设备',
    billingCycles: ['一次性'],
    highlightTag: '旗舰大容量买断',
    details: [
      '1000GB（1TB）旗舰独享买断流量，一口价买断，永不过期',
      '极速旗舰级最高优先级带宽，支持 3 台设备同时狂飙',
      '专为高净值金融、跨境核心业务与高端工作室打造的专属专线',
      '1TB 超大容量无时间重置限制，重度生产力用户的终身省心方案',
    ],
  },
];

/**
 * 4 大方案选择决策维度（使用需求、设备需求、流量需求、周期选择）
 */
export const SELECTION_DIMENSIONS: SelectionDimension[] = [
  {
    id: 'usage',
    dimensionName: '使用需求维度',
    subtitle: '按日常业务形态与通信敏感度评估',
    iconName: 'Activity',
    points: [
      {
        title: '轻度查阅与备用梯子',
        description: '星耀风暴 (80GB/月，年付仅109元) 或 一次性小流量 (160GB永不过期)，适合低频阅读与紧急备用。',
        tag: '轻量首选',
      },
      {
        title: '日常远程协同与跨境工作',
        description: '白银纪元 (144GB/月) 或 黄金序列 (360GB/月)，高频会议、代码仓库克隆拉取全时可用。',
        tag: '刚需标配',
      },
      {
        title: '高净值商业与极客多端',
        description: '铂金至臻 (750GB)、钻石穹顶 (1.6TB) 或 王者定制版 (500GB独立带宽)，超高吞吐保障。',
        tag: '顶配专线',
      },
    ],
  },
  {
    id: 'devices',
    dimensionName: '设备连接需求',
    subtitle: '按同时在线的终端数量进行考量',
    iconName: 'Laptop',
    points: [
      {
        title: '单人单机 / 专属独享',
        description: '一次性小流量套餐主打独立买断区专属节点，严格限 1 台设备，保证纯净不挤兑。',
        tag: '1 台独享',
      },
      {
        title: '双端同步 / 商旅跨年',
        description: '一次性标准包支持 2 台设备同时在线，手机与笔记本无缝同步，随时随地连接。',
        tag: '2 台协同',
      },
      {
        title: '多终端自由 / 全家桶生态',
        description: '周期订阅类套餐（星耀、白银、黄金、铂金、钻石、王者）均不限制在线客户端数量。',
        tag: '不限设备',
      },
    ],
  },
  {
    id: 'traffic',
    dimensionName: '流量规格评估',
    subtitle: '按月度数据吞吐规模合理预估',
    iconName: 'Database',
    points: [
      {
        title: '周期性流量档 (80GB - 1.6TB/月)',
        description: '每月自动重置额度，全节点 x1 计费倍率，晚高峰不限速，适合日常高频稳定使用。',
      },
      {
        title: '一次性不限时买断档 (160GB - 1.0TB)',
        description: '无时间限制、永不过期，告别月租焦虑，适合商务差旅与长期备用网络安全气囊。',
      },
      {
        title: '独立带宽定制档 (500GB/月独立带宽)',
        description: '专为高净值跨境企业打造，独立通道调度，保障高并发业务丝滑稳定。',
      },
    ],
  },
  {
    id: 'cycle',
    dimensionName: '订阅周期建议',
    subtitle: '兼顾灵活性与综合平均支出',
    iconName: 'Calendar',
    points: [
      {
        title: '月付 / 季付方案 (灵活性高)',
        description: '白银、黄金、铂金、钻石及王者定制版均支持月付，方便在本地网络环境下快速验证。',
        tag: '灵活试用',
      },
      {
        title: '半年付 / 年付方案 (平均支出更优)',
        description: '星耀风暴年付仅需 109 元（折算月均约 8 元），长期使用费率更具性价比。',
        tag: '长期推荐',
      },
      {
        title: '一次性买断 (零月租无忧)',
        description: '一口价买断，没有月度续费压力，用多少扣多少，长期备用首选。',
        tag: '买断省心',
      },
    ],
  },
];

/**
 * 3 大典型决策画像
 */
export const DECISION_PROFILES: DecisionProfile[] = [
  {
    name: '基础入门 / 学术轻办公',
    targetRole: '在校学生、学术科研人员、轻度外贸从业者',
    trafficAdvice: '星耀风暴 (80GB/月年付) 或 白银纪元 (144GB/月)',
    deviceAdvice: '不限制客户端在线设备数',
    cycleAdvice: '建议优先选择白银月付或星耀年付体验',
    summary: '适合偶尔查阅文献、收发国际邮件的用户，以控制开支、平稳可用为主。',
  },
  {
    name: '商旅出差 / 终身备用安全气囊',
    targetRole: '经常海外差旅人士、跨年候鸟商旅、偶尔使用梯子者',
    trafficAdvice: '一次性买断系列（160GB / 420GB / 1.0TB 永不过期）',
    deviceAdvice: '支持 1 至 3 台专属或多端连接',
    cycleAdvice: '一次买断，永不过期，无月租压力',
    summary: '告别每月扣费焦虑，把预算花在刀刃上，建立永不过期的网络安全气囊。',
  },
  {
    name: '高净值跨境企业 / 团队高并发',
    targetRole: '跨境电商核心团队、外贸大卖家、金融工作室、8K极清影音极客',
    trafficAdvice: '王者定制版 (500GB独立带宽) 或 钻石穹顶 (1.6TB超大流量池)',
    deviceAdvice: '商业级独立通道，保证高并发顺畅',
    cycleAdvice: '月付或年付按业务发展周期灵活配置',
    summary: '企业级顶级专线网络，超大独立带宽调度与最高优先级支持。',
  },
];
