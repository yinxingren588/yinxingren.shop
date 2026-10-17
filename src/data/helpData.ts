import { BRAND_NAME, BRAND_NAME_EN, SECONDARY_KEYWORD } from '@/config/site';

export interface HelpArticle {
  id: string;
  category: 'getting-started' | 'plan-selection' | 'client-setup' | 'multi-device' | 'troubleshooting';
  categoryName: string;
  title: string;
  content: string;
  tags: string[];
}

export const HELP_ARTICLES: HelpArticle[] = [
  // 1. 新手入门 (getting-started)
  {
    id: 'intro-guide',
    category: 'getting-started',
    categoryName: '新手使用',
    title: `初次了解${BRAND_NAME}：平台定位与使用须知`,
    content: `${BRAND_NAME}（${BRAND_NAME_EN}）使用指引平台为第三方服务导航站，旨在提供客观的网络连接技术解析与客户端配置指南。本站不设独立账户与充值系统，所有订阅与接入服务均由合规合作平台直接承保与交付。`,
    tags: ['新手入门', '平台身份', '使用须知'],
  },
  {
    id: 'verify-entry',
    category: 'getting-started',
    categoryName: '新手使用',
    title: `如何核实${SECONDARY_KEYWORD}与安全入口？`,
    content: `请认准官方公布的可信渠道或本站提供的受保护推广导航链接。不要信任非官方来源发布的第三方直链或非授权镜像站。本站提供的合作平台链接均完整保留了推广签名与官方校验参数，确保访问路径合规透明。`,
    tags: ['官方入口', '安全核验', '避坑指南'],
  },
  {
    id: 'quick-start-3steps',
    category: 'getting-started',
    categoryName: '新手使用',
    title: '从零开始建立连接的标准化三步流程',
    content: '第一步：在本站客观查阅方案对比，明确自身工作流所需的流量与并发规格；第二步：前往合作平台安全完成订阅并获取托管配置地址；第三步：下载系统适用的轻量客户端，导入配置后启动基于规则的分流连接。',
    tags: ['快速开始', '配置流程', '新手教程'],
  },

  // 2. 套餐选择 (plan-selection)
  {
    id: 'choose-right-plan',
    category: 'plan-selection',
    categoryName: '套餐选择',
    title: '如何根据日常网络任务选择合适规格？',
    content: '轻度检索与文献查阅推荐选择基础规格即可；若涉及跨国团队 Git 仓库频繁同步、海外容器镜像构建或跨国多平台电商运营，建议选购并发许可更多、流量更充沛的进阶规格。实际套餐类型以合作平台实时显示为准。',
    tags: ['套餐选型', '流量评估', '规格对比'],
  },
  {
    id: 'traffic-reset-rules',
    category: 'plan-selection',
    categoryName: '套餐选择',
    title: '流量配额与账单重置周期的重要提示',
    content: '各合作平台的流量重置机制通常分为“自然月首日重置”与“订单生效账单日重置”两种。订阅前请务必在合作平台用户中心核对清晰，以避免在账单周期末尾因意外断流影响关键研发任务。',
    tags: ['流量重置', '账单周期', '配额提醒'],
  },
  {
    id: 'billing-disclaimer',
    category: 'plan-selection',
    categoryName: '套餐选择',
    title: '关于价格变动与活动优惠的说明',
    content: '合作平台保留根据机房运营成本与节假日策略调整套餐定价的权利。本站标注的价格基于基准核验数据呈现，最终实际支付金额与即时折扣活动以合作平台收银台当前结算显示为准。',
    tags: ['价格变动', '活动折扣', '结算提示'],
  },

  // 3. 客户端 (client-setup)
  {
    id: 'get-config-link',
    category: 'client-setup',
    categoryName: '客户端',
    title: '如何获取订阅配置地址并完成导入？',
    content: '订阅完成后，在合作平台用户面板中找到“订阅链接”或“一键导入”按钮。复制该专属安全链接后，在已安装的通用客户端中选择“从剪贴板导入”或“添加订阅”，更新节点列表后即可选择可用节点。',
    tags: ['订阅导入', '配置链接', '节点更新'],
  },
  {
    id: 'routing-rules-intro',
    category: 'client-setup',
    categoryName: '客户端',
    title: '智能规则分流模式与全局模式的区别',
    content: '强烈推荐日常使用“规则模式”（Rule / PAC）。在此模式下，国内常用域名（如办公工具、本地政企服务）直连访问，海外特定科研、技术协同站点自动走专用隧道，兼顾访问速度与流量节约。',
    tags: ['规则分流', '全局模式', '模式切换'],
  },

  // 4. 多设备 (multi-device)
  {
    id: 'multi-platform-sync',
    category: 'multi-device',
    categoryName: '多设备',
    title: '同一订阅如何在多台设备之间同步使用？',
    content: '同一订阅链接可在您的笔记本、台式机、手机及平板上分别导入。周期订阅方案通常不限制设备在线数量，但在使用时应注意遵守合作平台的合理使用公约（Fair Use Policy），避免过度共享给非信任人员。',
    tags: ['多端协同', '设备漫游', '同步技巧'],
  },
  {
    id: 'home-router-setup',
    category: 'multi-device',
    categoryName: '多设备',
    title: '在家庭或办公路由网关中部署的考量',
    content: '若需要在软路由设备中配置透明代理，请确保路由器 CPU 具备足够的加密解密算力，并合理配置 DNS 防泄漏规则。对于高并发办公网络环境，建议选择带宽吞吐更充裕的商业级规格。',
    tags: ['路由器配置', '网关漫游', '办公部署'],
  },

  // 5. 常见问题 (troubleshooting)
  {
    id: 'time-sync-error',
    category: 'troubleshooting',
    categoryName: '常见问题',
    title: '导入成功后无法连接？先检查本地时钟同步',
    content: '现代加密传输协议对本地时间戳具备严格校验。如果您的操作系统时间与标准北京时间偏差超过 60 秒，会导致握手证书校验失败。请在系统设置中开启“自动与网络时间服务器同步”。',
    tags: ['时钟同步', '连接超时', '证书错误'],
  },
  {
    id: 'dns-cache-flush',
    category: 'troubleshooting',
    categoryName: '常见问题',
    title: '节点显示正常但部分网站打不开的处理方法',
    content: '常见原因为本地 DNS 缓存污染或浏览器 DNS 预解析问题。可尝试在命令行执行 ipconfig /flushdns 清除本地缓存，或在客户端分流设置中将远程 DNS 切换为主流公共无污染 DNS。',
    tags: ['DNS污染', '网页打不开', '网络排错'],
  },
];
