import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND_NAME,
  BRAND_NAME_EN,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_GROUP_URL,
  AFF_DISCLOSURE_TEXT,
} from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ChevronRight,
  Send,
  Users,
  Headphones,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Home,
} from 'lucide-react';

/**
 * /contact/ 联系支持与社群交流页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 严禁创建没有后端支持的假表单（无 input/form）
 * 3. 严禁虚构电话、邮箱、地址、微信或 QQ
 * 4. 使用疑问跳转站内 /help/
 * 5. 账户、订单与业务支持：通过 OfficialLink 前往合作平台查找客服（按钮文字：“前往合作平台查找客服”）
 * 6. Telegram 按钮规则：
 *    - 两个普通 <a> 外部链接：
 *      “进入Telegram官方频道” -> TELEGRAM_CHANNEL_URL
 *      “加入Telegram交流群” -> TELEGRAM_GROUP_URL
 *    - target="_blank" rel="noopener noreferrer"
 *    - 完整保留 "+"，不转码不截断
 *    - 不使用 OfficialLink，不计入 AFF 数量
 *    - 不描述为订单处理或退款渠道，明确为公告与社群互助
 * 7. AFF 数量统计：本页严格仅 1 个 AFF 入口（查找客服按钮）
 */
export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = `联系支持与官方交流渠道 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="w-full bg-brand-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航（纯站内 Link，0 AFF） */}
        <nav
          aria-label="面包屑导航"
          className="flex items-center space-x-2 text-xs text-slate-400 mb-8"
        >
          <Link
            to="/"
            className="flex items-center hover:text-brand-accent transition-colors focus:outline-none focus:underline"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>首页</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 font-medium" aria-current="page">
            联系我们
          </span>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>交流渠道 · 支持指引</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME} 支持中心与官方联系渠道
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            为您清晰整理官方维护通知频道、交流群直达入口以及常见疑难排错路径。本站坚持真实透明原则，不提供不可靠的虚假联系方式或空头表单，协助您精准直达对应解决渠道。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>无伪造后端假表单</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>无虚构电话、地址与个人社媒</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>官方公告与社群透明直通</span>
            </div>
          </div>
        </div>

        {/* 身份与支持边界合规声明 */}
        <div className="mb-14 p-6 rounded-2xl bg-brand-surface border border-brand-border shadow-sm text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-brand-text-heading">
                渠道性质与服务职责划分说明
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                本站（{BRAND_NAME}指引站）为第三方使用指南与服务导航平台。关于您的账号订阅、订单结算及退款审核等账户专属问题，均由合作平台后台系统独立承保与处理，社群频道与交流群不处理私人账户退款或订单事务。
              </p>
            </div>
          </div>
        </div>

        {/* 核心联系渠道卡片区 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 卡片 1：官方社群与实时维护通知 (包含2个 Telegram 按钮，普通 <a>，0 AFF) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all flex flex-col justify-between text-left shadow-subtle">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-6 shadow-subtle">
                <Send className="w-6 h-6" />
              </div>

              <div className="mb-2">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                  官方社群渠道
                </span>
              </div>

              <h3 className="text-xl font-bold text-brand-text-heading mb-3">
                Telegram 官方频道与交流群
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                用于接收合作平台的最新骨干维护通告、订阅节点变更通知，并与其他用户交流跨平台配置经验。
              </p>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/60 text-xs text-slate-400 space-y-1.5 mb-6">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 text-brand-accent" />
                  <span>服务通道定位提示</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  社群与频道仅用于公告接收与技术探讨，不具备订单处理、财务退款或即时私聊客服职能。
                </p>
              </div>
            </div>

            {/* 两个并列 Telegram 按钮：普通 <a> 外部链接，0 AFF */}
            <div className="pt-4 border-t border-brand-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shadow-subtle"
              >
                <Send className="w-4 h-4 text-brand-accent" />
                <span>进入Telegram官方频道</span>
              </a>

              <a
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-surface hover:bg-brand-primary border border-brand-border text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shadow-subtle"
              >
                <Users className="w-4 h-4 text-brand-accent" />
                <span>加入Telegram交流群</span>
              </a>
            </div>
          </div>

          {/* 卡片 2：账户、订单与售后支持 (使用 OfficialLink，AFF: 1) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all flex flex-col justify-between text-left shadow-subtle">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-6 shadow-subtle">
                <Headphones className="w-6 h-6" />
              </div>

              <div className="mb-2">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                  账户与订单事务
                </span>
              </div>

              <h3 className="text-xl font-bold text-brand-text-heading mb-3">
                合作平台账户与在线客服
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                若您遇到支付确认异常、工单提交、账单明细核对或账户密码找回等专属事务，请前往合作平台用户中心查找客服支持。
              </p>

              <div className="p-4 rounded-xl bg-brand-primary/40 border border-brand-border/60 text-xs text-slate-400 space-y-1.5 mb-6">
                <div className="flex items-center gap-1.5 text-slate-200 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                  <span>合作平台处理说明</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  通过合作平台官方用户控制台可提交受保护的工单记录，由合作平台专属客服跟进处理。
                </p>
              </div>
            </div>

            {/* 前往合作平台查找客服（通过 OfficialLink 输出，AFF: 1） */}
            <div className="pt-4 border-t border-brand-border">
              <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle">
                <span>前往合作平台查找客服</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            </div>
          </div>
        </div>

        {/* 商业推广说明 */}
        <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border text-xs text-slate-400 text-center mb-12">
          {AFF_DISCLOSURE_TEXT}
        </div>

        {/* 底部常见使用问题引导（纯站内 Link，0 AFF） */}
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="text-left">
            <h3 className="text-sm font-bold text-brand-text-heading">
              遇到常见配置问题？先查阅帮助中心
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              时钟同步、分流规则设置及 DNS 缓存排错等高频问题已有详尽解答。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/help/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs sm:text-sm font-semibold transition-all shadow-subtle"
            >
              <HelpCircle className="w-4 h-4" />
              <span>查阅帮助中心</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
