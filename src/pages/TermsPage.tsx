import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ShieldCheck,
  HelpCircle,
  ChevronRight,
  Scale,
  Lock,
  Home,
} from 'lucide-react';

/**
 * /terms/ 服务条款与使用协议页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 明确本站实际身份与用途：第三方网络信息展示、使用指引与合作平台导航站（isOfficial: false）
 * 3. 明确实际订阅、账户、订单和售后由第三方合作平台独立处理
 * 4. 明确披露推广链接（AFF）及可能获得佣金的情况
 * 5. 不虚构企业主体、工商编号或司法管辖条款
 * 6. 不使用极端免责或霸王条款
 * 7. 日期反映实际发布基准情况（2026-10-17），不因每次构建自动刷新
 * 8. 整页 AFF 数量严格为 0（导航栏已自动隐藏 AFF 按钮，页面内无任何 AFF 入口）
 */
export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = `服务条款与使用协议 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 正式法律条款页面，设置为正常收录，移除临时 noindex
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
            服务条款
          </span>
        </nav>

        {/* 页面标题与版本元数据标头 */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs text-slate-300 font-mono mb-4 shadow-subtle">
            <Scale className="w-3.5 h-3.5 text-brand-accent" />
            <span>TERMS OF SERVICE · 法律条款</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading tracking-tight mb-4">
            服务条款与使用协议
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            欢迎访问{BRAND_NAME}（{BRAND_NAME_EN}）。本协议详细阐明了本站作为第三方信息指引与服务导航平台的服务范畴、运营边界、推广佣金机制以及用户合规使用准则。
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

        {/* 核心身份与运营界限提示框 */}
        <div className="mb-12 p-6 rounded-2xl bg-brand-surface border border-brand-border shadow-subtle text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base font-bold text-brand-text-heading">
                特别声明：第三方导航与使用指引定位
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                本站（{BRAND_NAME}）由维护团队作为独立的<strong>第三方信息展示、使用指引与合作平台导航站点</strong>进行运维。本站不自营、不开发亦不直接提供底层网络代理节点基础设施，亦不具备用户注册、资金托管、订单结算或开具发票的商业功能。实际的节点订阅合同关系直接建立于您与独立第三方合作平台之间。
              </p>
            </div>
          </div>
        </div>

        {/* 条款正文板块 */}
        <div className="space-y-10 text-left text-xs sm:text-sm text-slate-300 leading-relaxed">
          {/* 第一条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                01
              </span>
              <h2>协议效力与适用范围</h2>
            </div>
            <p>
              1.1 当您访问、浏览或使用本站提供的任何网页、配置指南、选型参考或外链导航服务时，即表示您已完整阅读、充分理解并自愿受本服务条款的全部约束。
            </p>
            <p>
              1.2 若您不同意本条款的任何内容，或所在国家及地区的法律限制您访问本站所载之网络工具资讯，请立即停止访问并关闭本站。
            </p>
            <p>
              1.3 本条款仅适用于本站域名范围内的网页内容。当您通过超链接离开本站跳转至第三方服务商或外部社群时，本条款不再适用。
            </p>
          </section>

          {/* 第二条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                02
              </span>
              <h2>第三方合作平台与权责划分</h2>
            </div>
            <p>
              2.1 <strong>合同主体独立：</strong>本站展示的套餐类型、功能对比及客户端指引均基于合作平台公开发布的技术与价格资料整理。当您点击链接进入合作服务平台并完成注册或付款时，您是与该独立第三方合作服务商达成服务协议，本站并非该交易的当事方。
            </p>
            <p>
              2.2 <strong>售后与履约界限：</strong>任何关于套餐开通状态、流量额度核算、带宽并发速度、节点连通稳定性、退款审核、账户密码重置或争议调解的事项，均由该合作平台依照其自身公布的服务协议与退款政策独立承担。本站维护团队不参与资金结算，亦无权操作第三方平台的内部数据库或工单流转。
            </p>
            <p>
              2.3 <strong>支持引导协助：</strong>若您在合作平台遇到困难，请优先在合作平台控制台提交工单，或查阅本站提供的“帮助中心”以排查通用本地配置问题。
            </p>
          </section>

          {/* 第三条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                03
              </span>
              <h2>推广链接与佣金披露（Affiliate Disclosure）</h2>
            </div>
            <p>
              3.1 <strong>联盟佣金说明：</strong>依据商业诚信与合规公开准则，本站郑重披露：本站部分页面包含指向第三方合作平台的商业引流链接（Affiliate Links / AFF 链接）。当访问者通过此类专属链接跳转至合作平台并成功购买订阅时，合作平台可能会根据其推广返利计划向本站支付一定比例的引荐佣金或服务积分。
            </p>
            <p>
              3.2 <strong>消费者权益无损保证：</strong>通过本站推广链接前往合作平台购买，绝不会导致您的订阅费用增加，您所支付的价格与直接访问合作平台无异，有时甚至可受惠于合作平台向推广渠道开放的限时优惠活动。
            </p>
            <p>
              3.3 <strong>客观与中立原则：</strong>虽然佣金收入有助于本站维系基础服务器租用及日常内容更新，但本站始终秉持客观中立态度呈现技术参数与选型指南，绝不因商业推广而故意隐瞒服务局限或虚构性能指标。
            </p>
          </section>

          {/* 第四条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                04
              </span>
              <h2>用户合规使用准则与法律义务</h2>
            </div>
            <p>
              4.1 <strong>合法合规底线：</strong>用户在浏览本站、采纳本站配置指引或使用第三方网络服务时，必须严格遵守其所在国家、地区以及服务器所在地的现行法律、行政法规和网络安全政策。
            </p>
            <p>
              4.2 <strong>严禁滥用行为：</strong>严禁利用本站所载之信息、指引或通过合作平台获取的网络通道从事下列任何行为：
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>危害国家安全、泄露国家秘密、颠覆国家政权或破坏统一；</li>
              <li>从事未经授权的计算机入侵、端口探测、恶意渗透测试或拒绝服务攻击（DDoS）；</li>
              <li>分发计算机病毒、勒索软件、恶意木马或建立非法僵尸网络；</li>
              <li>从事电信网络诈骗、洗钱、网络赌博、非法交易或侵犯公民个人信息隐私；</li>
              <li>散布虚假谣言、恶意诽谤、侵犯第三方知识产权或商业机密。</li>
            </ul>
            <p>
              4.3 <strong>责任自负：</strong>若用户违反上述规定或当地法律法规，所产生的一切法律调查、民事索赔或刑事责任均由违规用户独立全额承担。
            </p>
          </section>

          {/* 第五条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                05
              </span>
              <h2>理性免责与不可抗力条款</h2>
            </div>
            <p>
              5.1 <strong>技术资料时效性：</strong>本站提供的软件指引、系统参数及协议配置技巧均基于公开技术标准及编写时的测试环境编写。因跨国互联网路由波动、底层网络运营商路由策略调整或第三方开源软件版本迭代，本站无法绝对保证所载内容在任何特定网络环境下的 100% 绝对有效性与持久性。
            </p>
            <p>
              5.2 <strong>不可抗力免责：</strong>对于因地震、台风等自然灾害、跨洋海底光缆故障阻断、公共骨干网络严重拥塞、国际电信监管政策变动、遭受大规模黑客攻击或政府行政管制等不可抗力事件导致的信息访问迟延、外链失效或指引中断，本站在合理法律限度内予以免责。
            </p>
            <p>
              5.3 <strong>非霸王条款声明：</strong>本站绝不采用“完全免除自身故意侵权责任”或“剥夺用户所有救济渠道”的极端霸王条款。所有免责说明均基于第三方免费信息指引站的客观法律属性制定，符合民商事诚实信用与公序良俗原则。
            </p>
          </section>

          {/* 第六条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                06
              </span>
              <h2>运营主体与司法管辖声明</h2>
            </div>
            <p>
              6.1 <strong>主体真实披露：</strong>本站由“{BRAND_NAME}（{BRAND_NAME_EN}）网站维护团队”作为独立的网络兴趣与技术导航项目进行日常管理与代码维护。本站不虚构不存在的企业法人资格、商业注册代码、虚拟公司架构或未经设立的境外法庭独占管辖声明。
            </p>
            <p>
              6.2 <strong>争端善意协商：</strong>若因本站展示的内容与用户产生任何分歧或疑义，双方应本着善意、理性、平等的原则，通过本站公开的 Telegram 官方社群或沟通渠道进行友好协商。
            </p>
          </section>

          {/* 第七条 */}
          <section className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-4">
            <div className="flex items-center gap-2.5 text-brand-text-heading font-bold text-base sm:text-lg border-b border-brand-border pb-3">
              <span className="w-6 h-6 rounded-lg bg-brand-primary text-brand-accent text-xs flex items-center justify-center font-mono">
                07
              </span>
              <h2>条款更新与公示机制</h2>
            </div>
            <p>
              7.1 本站维护团队有权根据网络环境变化、合作方条款变更或法律政策更新，适时对本服务条款进行修订。
            </p>
            <p>
              7.2 条款更新后将直接在本页面予以公示，并在页面顶部明确标注生效与修订的具体日期。本站不会采用脚本机制在每次静态编译时虚假刷新修订日期。
            </p>
            <p>
              7.3 若您在条款修订公布后继续浏览或使用本站，即表示您理解并认可经修订后的最新条款。
            </p>
          </section>
        </div>

        {/* 底部政策关联与站内指引（纯站内 Link，0 AFF） */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-subtle text-left">
          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-brand-text-heading">
              了解我们的数据安全与隐私保护细则
            </h3>
            <p className="text-xs text-slate-400">
              我们坚持前端零收集与最小化数据使用原则，阅读隐私政策了解更多技术实现。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/privacy/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-subtle"
            >
              <Lock className="w-3.5 h-3.5 text-brand-accent" />
              <span>查阅隐私政策</span>
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

export default TermsPage;
