/**
 * 典型使用场景示例数据
 * 
 * 规则要求：
 * 1. 本站未收集经核实的实名用户评价，严禁将 AI 生成内容描述为真实用户评论。
 * 2. 严格定位为“典型使用场景”、“使用体验示例”与“不同需求参考”。
 * 3. 严禁使用真实姓名、虚假头像、五星评分、伪造评论数、公司名称或虚构订单号。
 * 4. 严禁暗示已经验证某个特定流媒体、AI 平台或特定网络环境必然可用。
 * 5. 必须声明：“以下内容为典型使用场景示例，不代表可验证的实名用户评价。”
 */

export interface ScenarioItem {
  id: string;
  tag: string;
  sceneName: string;
  targetRole: string;
  experienceSummary: string;
  workflowContext: string;
}

export const SCENARIO_DISCLAIMER = '以下内容为典型使用场景示例，不代表可验证的实名用户评价。';

export const SCENARIOS_DATA: ScenarioItem[] = [
  {
    id: 'dev-workflow',
    tag: '软件研发 · CI/CD',
    sceneName: '开源代码同步与依赖拉取',
    targetRole: '跨境开发工程师参考',
    experienceSummary:
      '在日常拉取海外依赖包和提交代码时，通过配置客户端域名分流规则，保持代码仓库与开发文档连接稳定，有效降低终端编译超时几率。',
    workflowContext: '适用于 Git 仓库拉取、依赖包管理及命令行开发工具链。',
  },
  {
    id: 'ecommerce-ops',
    tag: '出海业务 · 店铺运营',
    sceneName: '跨平台跨境电商后台管理',
    targetRole: '海外电商操盘手参考',
    experienceSummary:
      '在多店铺后台登录与订单处理场景中，使用低干扰的混淆隧道连接，能够平稳维持管理后台的会话状态，减少频繁异地重新验证的困扰。',
    workflowContext: '适用于独立站后台、跨境多平台店铺的日常会话管理。',
  },
  {
    id: 'digital-nomad',
    tag: '远程办公 · 漫游防护',
    sceneName: '公共网络下的安全私密接入',
    targetRole: '数字游民自由职业者参考',
    experienceSummary:
      '在机场、咖啡厅等不可信的开放 Wi-Fi 环境中处理私密商业文档，借助加密混淆长连接，能够在公共信道上构建私有数据隔离保护。',
    workflowContext: '适用于跨国远程协同办公、公共场所安全移动接入。',
  },
  {
    id: 'academic-search',
    tag: '学术调研 · 资料检索',
    sceneName: '海外前沿技术文献与论文检索',
    targetRole: '学术与技术研究者参考',
    experienceSummary:
      '查阅海外学术数据库、开源论文库及技术规范白皮书，平稳的低延迟连接让长时间的文献检索与资料整理过程更为连贯流畅。',
    workflowContext: '适用于技术文档查阅、论文检索及开源知识库探索。',
  },
  {
    id: 'content-creator',
    tag: '自媒体运营 · 内容排期',
    sceneName: '海外社交平台图文与排期管理',
    targetRole: '海外社媒运营人员参考',
    experienceSummary:
      '对于运营多个海外社媒主页的团队，保持低抖动的网络通路有助于在定时发布和互动维护时获得持续的访问反馈，提升协作效率。',
    workflowContext: '适用于社交媒体内容排期发布与跨国多账号管理。',
  },
  {
    id: 'multi-device',
    tag: '多端协同 · 随时随地',
    sceneName: '桌面与移动设备多端漫游',
    targetRole: '多设备个人用户参考',
    experienceSummary:
      '在工作站电脑与移动手机之间使用统一订阅配置，出差与移动场景下无需反复配置参数，开箱即用平滑衔接日常工作流。',
    workflowContext: '适用于多操作系统（Windows/macOS/iOS/Android）漫游。',
  },
];
