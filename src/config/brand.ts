/**
 * 品牌设计系统与视觉规范
 * 依据品牌名「隐形人」量身定制，展现幽夜潜行、极简克制与精准翡翠信标的独立视觉美学。
 * 严格杜绝通用AI渐变、玻璃拟态堆叠、大量胶囊标签与虚假数据控制台。
 */

export interface SellingPoint {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export const BRAND_DESIGN_SYSTEM = {
  // 1. 品牌英文展示名（仅作为本站展示英文名，非品牌官方注册英文名）
  nameEn: 'The Invisible',
  nameZh: '隐形人',
  aliasEn: 'InvisibleMan',

  // 2. 品牌定位文案
  positioning: '面向数字出海、跨境科研与远程协作用户的『隐形人』品牌信息展示与服务指引导航站。秉持克制、透明、匿名的信息服务原则，为用户梳理多端连接指引、节点路由认知与合规使用规范，消除信息壁垒。',

  // 3. 目标用户描述
  targetAudience: '需要进行跨境远程办公、海外数据检索、学术论文查询、跨国软件协同及重视个人网络数字足迹与传输隐私的企业员工、开发者、研究人员及自由职业者。',

  // 4. 品牌口号
  slogan: '隐匿穿行，界限自消',
  sloganEn: 'Pass Unseen, Connect Boundless',

  // 5. 核心卖点（杜绝虚假、未经核实及夸大性能承诺）
  sellingPoints: [
    {
      id: 'stealth-tunnel',
      title: '隐匿传输感知',
      description: '聚焦现代网络流量混淆与低特征封装，减少连接阻断与数字指纹暴露，保障网络访问隐蔽顺畅。',
      badge: '隐私优先',
    },
    {
      id: 'client-onboarding',
      title: '跨端开箱指引',
      description: '细致梳理 Windows、macOS、iOS、Android 等多主流客户端订阅导入逻辑与路由分流规则，降低配置门槛。',
      badge: '全端适配',
    },
    {
      id: 'route-topology',
      title: '节点拓扑认知',
      description: '客观剖析直连、BGP 与专线中继的基本网络原理，帮助用户根据自身网络环境与实际场景理性选型。',
      badge: '客观透明',
    },
    {
      id: 'minimal-interface',
      title: '极简克制交互',
      description: '去噪去杂，无冗余诱导广告，提供高可读性、高对比度的纯粹信息架构与服务跳转体验。',
      badge: '纯粹克制',
    },
    {
      id: 'neutral-disclosure',
      title: '透明第三方标注',
      description: '明确标识商业合作与佣金机制，不作未经证实的性能承诺，客观指引用户前往合作平台核验实时套餐。',
      badge: '真实合规',
    },
  ] as SellingPoint[],

  // 6. 品牌色彩系统
  colors: {
    primary: '#0F172A',       // 深空墨蓝 Slate-900：低调内敛
    secondary: '#334155',     // 暗钛灰 Slate-700：沉稳理性
    accent: '#10B981',        // 潜行翡翠 Emerald-500：暗夜雷达中清晰、精准的信标绿
    accentHover: '#059669',   // 聚焦翡翠 Emerald-600
    accentLight: '#064E3B',   // 暗翡翠背景底色
    background: {
      base: '#090D16',        // 幽夜深黑基底
      surface: '#111827',     // 沉稳卡片基底
      elevated: '#1A243D',    // 轻度抬升层板
    },
    text: {
      heading: '#F8FAFC',     // 霜白天际（标题）
      body: '#E2E8F0',        // 柔亮正文（正文）
      muted: '#94A3B8',       // 哑光次级文本
      subtle: '#64748B',      // 暗哑辅助注释
    },
    border: {
      default: '#1E293B',     // 低对比幽暗边框
      hover: '#334155',       // 交互反馈边框
    },
  },

  // 7. Logo 图形方向
  logoConcept: {
    geometry: '极简「潜行棱镜」与「隐形折角」（Stealth Prism）',
    meaning: '由一条精密的隐匿折角线条切入虚线网格，中心凝结为一颗翡翠绿信号点，既像隐匿身形的人形轮廓抽象剪影，又像雷达扫描盲区中的安全折射信道，寓意“穿行隐匿，连接精准”。',
  },

  // 8. 字体层级
  typography: {
    display: 'text-3xl md:text-5xl font-bold tracking-tight',
    h1: 'text-2xl md:text-4xl font-bold tracking-tight',
    h2: 'text-xl md:text-2xl font-semibold tracking-tight',
    h3: 'text-lg md:text-xl font-medium',
    bodyLarge: 'text-base md:text-lg leading-relaxed text-slate-300',
    bodyBase: 'text-sm md:text-base leading-relaxed text-slate-300',
    bodySmall: 'text-xs md:text-sm leading-normal text-slate-400',
    caption: 'text-xs tracking-wider uppercase text-slate-500',
  },

  // 9. 圆角、阴影和间距规范
  spacingAndRadius: {
    borderRadius: {
      button: 'rounded-lg',   // 8px
      card: 'rounded-xl',     // 12px
      container: 'rounded-2xl'// 16px
    },
    shadows: {
      subtle: 'shadow-sm shadow-black/40',
      card: 'shadow-md shadow-black/60',
      cardHover: 'shadow-xl shadow-black/80',
    },
    sectionSpacing: 'py-16 md:py-24',
    containerPadding: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },

  // 10. 视觉母题
  visualMotif: {
    name: '幽夜潜行与精准翡翠信标 (Obsidian Stealth & Precision Beacon)',
    description: '深色高对比度、网格线框微暗结构、克制的翡翠绿状态信标。杜绝通用AI渐变、玻璃拟态堆叠与假数据控制台。',
    avoidList: [
      '通用AI大渐变',
      '玻璃拟态堆叠',
      '大量胶囊标签',
      '无意义发光',
      '多层悬浮卡片',
      '假数据控制台',
    ],
  },
} as const;
