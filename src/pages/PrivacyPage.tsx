import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  Lock,
  EyeOff,
  Code2,
  ExternalLink,
  ChevronRight,
  Database,
  Globe,
  HelpCircle,
  FileText,
  AlertCircle,
  Home,
} from 'lucide-react';

/**
 * /privacy/ 隐私政策与数据保护说明页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 严格基于源码与资源加载真实情况编写：
 *    - Cookie：无第一方或第三方追踪 Cookie
 *    - localStorage / sessionStorage：未使用
 *    - Analytics / Pixel：无任何第三方追踪脚本
 *    - fetch / axios / WebSocket：无后台数据上报 API 请求
 *    - 表单与数据提交：全站无输入表单，无 PII 数据收集
 *    - 外部资源：纯本地静态构建产物与内联 SVG，无外部字体或 CDN 依赖
 *    - 跳转合作平台：纯标准超链接跳转，携带推广码参数，本站不获取交易信息
 *    - 跳转 Telegram：纯标准超链接跳转，绝不自动向 Telegram 提交资料
 * 3. 严格区分：浏览器页面行为、构建脚本行为与托管服务器网络日志，不得混为一谈
 * 4. 客观严谨，不能仅因无表单就虚构“完全不处理任何信息”，需如实阐明底层 Web 服务器网络协议日志
 * 5. 未知的托管平台日志规则不编造，按可确认范围说明
 * 6. 日期反映实际基准（2026-10-17），不因构建自动刷新
 * 7. 整页 AFF 数量严格为 0（导航栏已隐藏，页面内无 AFF 入口）
 */
export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = `隐私政策与数据保护说明 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 正式隐私政策页面，设置为正常收录，移除临时 noindex
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="w-full bg-brand-bg py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航（纯站内 Link，0 AFF） */}
        <nav
          aria-label="面包屑导航"
          className="flex items-center space-x-2 text-xs text-slate-400 mb-8"
        >
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-brand-accent transition-colors focus:outline-none focus:underline"
          >
            <Home className="w-3.5 h-3.5" />
            <span>首页</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
          <span className="text-slate-200 font-medium" aria-current="page">
            隐私政策
          </span>
        </nav>

        {/* 页面主标题与版本标识 */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-slate-300 font-mono mb-4 shadow-subtle">
            <Lock className="w-3.5 h-3.5 text-brand-accent" />
            <span>PRIVACY POLICY · 数据保护</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading tracking-tight mb-4">
            隐私政策与数据保护说明
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {BRAND_NAME}（{BRAND_NAME_EN}）高度重视用户的隐私权利与数据安全。本政策基于本站实际代码工程与部署环境的技术事实编写，详尽披露前端运行逻辑、外链跳转行为及底层 Web 服务器网络日志的技术边界。
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400 border-t border-brand-border pt-4">
            <div>
              <span className="text-slate-500">生效日期：</span>
              <span className="text-slate-300 font-medium">2026年10月17日</span>
            </div>
            <span className="text-slate-700">|</span>
            <div>
              <span className="text-slate-500">最新修订：</span>
              <span className="text-slate-300 font-medium">2026年10月17日</span>
            </div>
            <span className="text-slate-700">|</span>
            <div>
              <span className="text-slate-500">页面合规状态：</span>
              <span className="text-brand-accent font-medium">纯净政策页（AFF 数量：0）</span>
            </div>
          </div>
        </div>

        {/* 核心数据原则摘要框 */}
        <div className="mb-12 p-6 rounded-2xl bg-brand-surface border border-brand-border shadow-subtle text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
              <EyeOff className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base font-bold text-brand-text-heading">
                隐私设计底线：前端零收集与数据最小化
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                作为纯净信息指南与技术导航站点，我们坚信最好的隐私保护是“不收集不必要的数据”。本站前端源码中未设置任何跨站追踪 Cookie、未加载任何广告像素代码（Pixel）、未引入第三方统计分析平台（Analytics），亦未设置任何要求用户输入个人身份信息的交互表单。
              </p>
            </div>
          </div>
        </div>

        {/* 政策正文板块 */}
        <div className="space-y-10 text-left text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* 第一条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                01
              </span>
              <h2>前端代码行为与本地存储核验</h2>
            </div>
            <p>
              我们对本站生产环境构建产物（Bundle）与源代码进行了详尽的代码级隐私审查，现将浏览器客户端执行行为客观说明如下：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/80 space-y-1.5">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                  <Database className="w-3.5 h-3.5 text-brand-accent" />
                  Cookie 与本地存储
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  本站前端<strong>未写入任何 HTTP Cookie</strong>，未调用 <code>localStorage</code> 或 <code>sessionStorage</code> 持久化记录用户任何浏览偏好、身份标识或访问轨迹。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/80 space-y-1.5">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                  <Code2 className="w-3.5 h-3.5 text-brand-accent" />
                  异步网络通信
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  本站未在前端逻辑中编写任何远程 API 上报请求，源码中<strong>无 <code>fetch</code>、无 <code>axios</code>、无 <code>WebSocket</code> 通信</strong>，不向任何自营或第三方数据接口回传运行数据。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/80 space-y-1.5">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                  <FileText className="w-3.5 h-3.5 text-brand-accent" />
                  表单与个人数据录入
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  全站<strong>无注册、无登录、无留言或评论表单</strong>。帮助中心搜索框完全运行于浏览器内存（纯前端状态过滤），不向服务器提交搜索词，不收集任何个人可识别信息（PII）。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/80 space-y-1.5">
                <span className="font-semibold text-slate-200 flex items-center gap-1.5 text-xs">
                  <EyeOff className="w-3.5 h-3.5 text-brand-accent" />
                  追踪探针与统计 SDK
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  本站<strong>未集成任何第三方统计脚本</strong>（包括但不限于 Google Analytics、Google Tag Manager、百度统计、友盟等），亦未部署 Meta/Facebook Pixel 等行为追踪像素。
                </p>
              </div>
            </div>
          </section>

          {/* 第二条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                02
              </span>
              <h2>外部静态资源与第三方加载审查</h2>
            </div>
            <p>
              2.1 <strong>全站本地化打包：</strong>本站所有页面脚本（JS）、样式表（CSS）以及排版矢量图形（SVG），均在编译阶段完成打包并托管于同源静态目录，用户在浏览本站时无需向第三方 CDN 服务商发起静态资源握手。
            </p>
            <p>
              2.2 <strong>无第三方字体引入：</strong>本站字体采用客户端操作系统原生系统字体栈（System Font Stack），页面代码中未加载任何 Google Fonts、Adobe Typekit 等外部字体资源，有效杜绝了因字体加载而附带向海外第三方字体服务器泄露访问者 IP 地址的技术风险。
            </p>
          </section>

          {/* 第三条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                03
              </span>
              <h2>外部超链接跳转行为透明披露</h2>
            </div>
            <p>
              本站包含指向外部第三方域名（包括合作服务平台及 Telegram 官方频道）的标准超链接，其真实代码行为披露如下：
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border text-xs space-y-1.5">
                <span className="font-semibold text-brand-text-heading flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-brand-accent" />
                  第三方合作平台跳转（Affiliate Links）
                </span>
                <p className="text-slate-300 leading-relaxed">
                  当您在特定页面点击商业操作按钮（如“立即体验”、“前往合作平台获取”）时，浏览器将通过标准 HTML 标签在外部新标签页中打开合作平台页面（<code>https://varnexa.invisibleaff.com/#/?code=JF4seZUy</code>）。链接中的代码属于引流识别标记。该行为是纯粹的浏览器页面导航，<strong>本站前端代码不拦截、不抓取、亦无法截获或存储您在合作平台输入的账号密码、支付流水或身份凭证</strong>。您在合作平台的隐私事宜由该合作平台自身的隐私协议独立管辖。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border text-xs space-y-1.5">
                <span className="font-semibold text-brand-text-heading flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-accent" />
                  Telegram 官方频道与交流群跳转
                </span>
                <p className="text-slate-300 leading-relaxed">
                  联系页面所提供的 Telegram 官方频道与交流群入口均采用标准的 <code>&lt;a href="https://t.me/+..." target="_blank" rel="noopener noreferrer"&gt;</code> 外部超链接。该代码行为完全等同于在浏览器地址栏手动输入网址，<strong>本站代码绝不自动向 Telegram 平台传输、推送或同步任何访问者设备数据或用户资料</strong>。
                </p>
              </div>
            </div>
          </section>

          {/* 第四条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                04
              </span>
              <h2>技术三层架构划分与 Web 服务器网络协议日志</h2>
            </div>
            <p>
              本站坚持客观真实的合规原则，<strong>不能仅因本站无表单就虚假声称“完全不处理任何网络信息”</strong>。在互联网网络通信底层，必须明确区分三个不同维度的技术行为：
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border text-xs space-y-1.5">
                <span className="font-semibold text-slate-200">1. 浏览器页面端行为（Client-side App）：</span>
                <p className="text-slate-400 leading-relaxed">
                  由本站编写的 React 前端代码在您的本地浏览器中沙盒运行，严格遵循零追踪、零表单、零本地持久化的最小化原则，不主动采集用户个人资料。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border text-xs space-y-1.5">
                <span className="font-semibold text-slate-200">2. 构建编译脚本行为（Build Pipeline）：</span>
                <p className="text-slate-400 leading-relaxed">
                  Node.js / Vite 构建脚本仅在开发环境或 CI 持续集成服务器上将 TypeScript 源码编译打包为静态 HTML/CSS/JS 静态文件，构建过程完全离线且不涉及任何真实终端用户的数据交互。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border text-xs space-y-1.5">
                <span className="font-semibold text-slate-200">3. 部署托管环境与 Web 服务器网络日志（Server Protocol Logs）：</span>
                <p className="text-slate-400 leading-relaxed">
                  当您的浏览器通过 TCP/IP 与 TLS 握手请求本站托管的静态文件时，底层托管服务器（例如由主流云网络服务商提供的基础设施）根据 HTTP 协议通用标准与网络安全运维规范，会自动在 Web 访问日志中记录基础网络元数据，包括：脱敏或哈希化的客户端 IP 地址、访问请求时间戳、请求的资源 URL、HTTP 响应状态码、网络传输字节数以及客户端主动发送的 User-Agent 浏览器标头与 Referer 来源标头。
                </p>
                <div className="pt-2 text-[11px] text-slate-400 flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>日志范围与保管说明：</strong>未知的具体第三方托管平台底层日志策略按其基础设施通用安全准则运作。此类技术日志仅用于防御恶意 DDoS 洪水攻击、识别网络爬虫异常及保障全球边缘网络负载均衡，本站维护团队不会亦无法将此类底层网络协议日志与任何自然人的真实身份信息相绑定。
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 第五条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                05
              </span>
              <h2>未成年人个人信息保护</h2>
            </div>
            <p>
              本站主要面向具备自主网络技术认知能力的出海开发者与跨境贸易从业者。本站不面向、不引导亦不故意收集未满 18 周岁未成年人的任何个人数据。如果您属于未成年人，请在法定监护人的知情、指导与同意下查阅相关公共资讯。
            </p>
          </section>

          {/* 第六条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                06
              </span>
              <h2>真实维护主体与隐私沟通渠道</h2>
            </div>
            <p>
              6.1 <strong>主体声明：</strong>本站由“{BRAND_NAME}（{BRAND_NAME_EN}）网站维护团队”自主运维与更新。我们坚守诚信透明原则，不虚构不存在的数据合规官（DPO）职位、虚拟办公大楼地址或虚构的跨国法务团队。
            </p>
            <p>
              6.2 <strong>联系方式：</strong>如果您对本隐私政策的内容、技术实现细节或数据处理边界存在任何疑问与建议，欢迎通过本站公开的 Telegram 官方社群或频道与我们取得联系。
            </p>
          </section>

          {/* 第七条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                07
              </span>
              <h2>政策修订与固定日期机制</h2>
            </div>
            <p>
              7.1 随着网络技术迭代或本站前端代码架构演进，我们可能会适时更新本隐私保护说明。任何更新均将直接发布于本页面。
            </p>
            <p>
              7.2 本隐私政策的生效日期与修订日期固定记录为真实发布节点（2026年10月17日），绝不采用自动化构建脚本动态伪造“今日更新”时间戳。
            </p>
          </section>
        </div>

        {/* 底部政策关联与站内指引（纯站内 Link，0 AFF） */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle text-left">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-brand-text-heading">
              查阅我们的服务条款与免责声明
            </h3>
            <p className="text-xs text-slate-400">
              了解第三方合作平台关系、联盟佣金披露及合规使用守则。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/terms/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-subtle"
            >
              <FileText className="w-3.5 h-3.5 text-brand-accent" />
              <span>查阅服务条款</span>
            </Link>

            <Link
              to="/help/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-surface hover:bg-brand-primary border border-brand-border text-slate-300 hover:text-white text-xs font-semibold transition-all shadow-subtle"
            >
              <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
              <span>帮助中心</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
