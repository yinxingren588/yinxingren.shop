import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, AFF_DISCLOSURE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import HeroVisual from '@/components/HeroVisual';
import {
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';

/**
 * 首页 Hero 分区组件
 * 
 * 规则要求：
 * 1. 唯一 H1：自然融入核心关键词「隐形人」，清楚表达页面主题，不堆砌同义词
 * 2. 副标题说明真实服务主题与本站用途，不使用未经证实的官方身份或夸大技术承诺
 * 3. 主 CTA 使用 OfficialLink 前往合作平台；次 CTA 使用站内 Link 跳转 /pricing/
 * 4. 4 项客观中立卖点，杜绝虚夸宣传
 * 5. 右侧视觉组件 HeroVisual 独立解耦，杜绝横向溢出
 */
export const Hero: React.FC = () => {
  const sellingPoints = [
    {
      id: 'stealth-tunnel',
      title: '隐匿传输感知',
      desc: '流量特征深度伪装与混淆封装，减少审查干扰与网络嗅探风险',
    },
    {
      id: 'client-onboarding',
      title: '多端客户端指引',
      desc: '主流桌面与移动系统简易配置导入，系统化降低跨端上手门槛',
    },
    {
      id: 'topology-clarity',
      title: '链路拓扑认知',
      desc: '客观解析直连、中继与专线传输原理，辅助用户理性选型',
    },
    {
      id: 'neutral-guide',
      title: '中立透明第三方',
      desc: '明确标识商业合作属性与佣金机制，拒绝未经核实的绝对承诺',
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-brand-bg via-brand-surface/40 to-brand-bg"
    >
      {/* 潜行翡翠氛围微光 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[320px] bg-emerald-500/8 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* 左侧文案与操作区 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 品牌定位短句 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs text-emerald-400 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>隐形人官网导航 · 隐形人机场评测与出海连接认知指引</span>
            </div>

            {/* 页面唯一 H1：自然融入核心关键词「隐形人官网」与「隐形人机场」，清晰表达主题 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text-heading leading-tight"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">{BRAND_NAME}官网</span>与{BRAND_NAME}机场选型指南：
              <span className="block text-brand-text-heading mt-2 sm:mt-3">
                专注出海隐私与跨境远程协同
              </span>
            </h1>

            {/* Hero 副标题：客观阐明服务主题与本站用途 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              系统梳理{BRAND_NAME}官网（{BRAND_NAME_EN}）多端配置逻辑、{BRAND_NAME}机场协议分流机制与服务线路认知。为跨境开发者、出海科研与远程办公人员提供客观、透明的第三方使用指南与官方平台入口。
            </p>

            {/* CTA 操作按钮组 */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* 主 CTA：使用 OfficialLink 前往官方平台 */}
              <OfficialLink className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
                <span>前往官方平台</span>
                <ArrowRight className="w-4 h-4" />
              </OfficialLink>

              {/* 次 CTA：使用普通 Link 跳转 /pricing/ 页面 */}
              <Link
                to="/pricing/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/70 hover:border-slate-500 transition-all shadow-subtle backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-500/40"
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <span>查看套餐选型指南</span>
              </Link>
            </div>

            {/* 推广与佣金说明 */}
            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              {AFF_DISCLOSURE_TEXT}
            </p>

            {/* 4 项简短客观卖点列表 - 现代 Bento 模块化卡片架构 */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {sellingPoints.map((point) => (
                <div
                  key={point.id}
                  className="group relative p-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900/85 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 shadow-sm flex items-start gap-3 overflow-hidden"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-brand-accent group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-semibold text-brand-text-heading group-hover:text-emerald-400 transition-colors">
                      {point.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧独立品牌视觉区 (5列) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
