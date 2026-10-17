import React, { useState } from 'react';
import {
  OFFICIAL_PLANS,
  SELECTION_DIMENSIONS,
  DECISION_PROFILES,
  PRICING_VERIFICATION,
} from '@/data/pricingData';
import { AFF_DISCLOSURE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ArrowRight,
  CheckCircle2,
  Filter,
  Layers,
  ShieldCheck,
  Zap,
  Calendar,
  Laptop,
  Database,
  Activity,
  UserCheck,
} from 'lucide-react';

interface PricingGuideProps {
  isPage?: boolean;
}

type TabMode = 'all' | 'subscription' | 'onetime' | 'dimensions';

/**
 * 官方套餐与方案选型指南通用核心组件
 * 
 * 规则要求：
 * 1. 首页与 /pricing/ 页面统一共用此组件与 pricingData 数据源。
 * 2. 价格与规格全部严格基于官方发布信息呈现，不编造虚假性能。
 * 3. 明确标注：“套餐、价格与活动以合作平台当前显示为准”。
 * 4. 每个方案卡片最多一个主要 AFF 按钮（OfficialLink）。
 */
export const PricingGuide: React.FC<PricingGuideProps> = ({ isPage = false }) => {
  const [activeTab, setActiveTab] = useState<TabMode>('all');
  const [selectedPlanId, setSelectedPlanId] = useState<string>(OFFICIAL_PLANS[0].id);

  const filteredPlans = OFFICIAL_PLANS.filter((plan) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'subscription') return plan.category === 'subscription';
    if (activeTab === 'onetime') return plan.category === 'onetime';
    return false;
  });

  const getDimensionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-brand-accent" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-brand-accent" />;
      case 'Database':
        return <Database className="w-5 h-5 text-brand-accent" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-brand-accent" />;
      default:
        return <Layers className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className={`w-full ${isPage ? 'pt-2' : ''}`}>
      {/* 顶部筛选标签组 */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-brand-border">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-brand-accent" />
          <span className="text-xs font-bold text-brand-text-heading">方案查看模式：</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-brand-accent text-black shadow-sm font-bold'
                : 'bg-brand-surface text-slate-300 hover:text-white hover:bg-brand-primary border border-brand-border'
            }`}
          >
            全部方案 ({OFFICIAL_PLANS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('subscription')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'subscription'
                ? 'bg-brand-accent text-black shadow-sm font-bold'
                : 'bg-brand-surface text-slate-300 hover:text-white hover:bg-brand-primary border border-brand-border'
            }`}
          >
            周期订阅 (6款)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('onetime')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'onetime'
                ? 'bg-brand-accent text-black shadow-sm font-bold'
                : 'bg-brand-surface text-slate-300 hover:text-white hover:bg-brand-primary border border-brand-border'
            }`}
          >
            一次性买断 (3款)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('dimensions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'dimensions'
                ? 'bg-brand-accent text-black shadow-sm font-bold'
                : 'bg-brand-surface text-slate-300 hover:text-white hover:bg-brand-primary border border-brand-border'
            }`}
          >
            4大决策考量维度
          </button>
        </div>
      </div>

      {/* 1. 套餐展示列表 (当 tab 为 all/subscription/onetime) */}
      {activeTab !== 'dimensions' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlans.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border ${
                  isSelected || plan.isFeatured
                    ? 'bg-brand-surface border-brand-accent shadow-card'
                    : 'bg-brand-bg border-brand-border hover:border-brand-border-hover'
                }`}
              >
                {/* 顶部徽标与类别 */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                      {plan.categoryName}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {plan.highlightTag}
                    </span>
                  </div>

                  {/* 标题与 Emoji */}
                  <h3 className="text-xl font-bold text-brand-text-heading flex items-center gap-2 mb-2">
                    <span>{plan.name}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* 价格看板 */}
                  <div className="p-4 rounded-xl bg-brand-primary/60 border border-brand-border mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-brand-text-heading">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {plan.period}
                      </span>
                    </div>
                    <div className="mt-2 text-[11px] text-brand-accent font-mono">
                      可选周期：{plan.availableCycles}
                    </div>
                  </div>

                  {/* 核心规格参数 */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono mb-6">
                    <div className="p-2 rounded-lg bg-brand-surface/80 border border-brand-border/60">
                      <span className="text-slate-500 block text-[10px]">流量额度</span>
                      <span className="text-slate-200 font-semibold">{plan.monthlyTraffic}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-brand-surface/80 border border-brand-border/60">
                      <span className="text-slate-500 block text-[10px]">设备在线</span>
                      <span className="text-slate-200 font-semibold">{plan.devices}</span>
                    </div>
                  </div>

                  {/* 详细权益清单 */}
                  <div className="space-y-2 mb-6">
                    {plan.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                        <span className="leading-normal">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 底部 CTA：每个方案最多一个主要 AFF 按钮 */}
                <div className="pt-4 border-t border-brand-border">
                  <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle">
                    <span>{PRICING_VERIFICATION.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. 四大方案选择决策维度 (当 tab 为 dimensions 或在页面上附加展示) */}
      <div className={`space-y-8 ${activeTab === 'dimensions' ? 'block' : 'mt-12 pt-10 border-t border-brand-border'}`}>
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-brand-accent" />
            <span>选型方法论 · 4 大理性考量维度</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
            如何根据业务需求选型？
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-3xl leading-relaxed">
            避免为闲置流量或冗余规格付费。从日常实际业务形态、并发设备数、月度吞吐量及周期预算四个维度进行科学决策。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SELECTION_DIMENSIONS.map((dim) => (
            <div
              key={dim.id}
              className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center flex-shrink-0">
                  {getDimensionIcon(dim.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text-heading">
                    {dim.dimensionName}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {dim.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                {dim.points.map((pt, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-lg bg-brand-primary/40 border border-brand-border/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-slate-200">{pt.title}</span>
                      {pt.tag && (
                        <span className="text-[10px] font-mono text-brand-accent px-1.5 py-0.5 rounded bg-brand-primary border border-brand-border">
                          {pt.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3 大典型角色决策画像 */}
        <div className="mt-10 p-6 rounded-2xl bg-brand-surface border border-brand-border">
          <h4 className="text-base font-bold text-brand-text-heading mb-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-brand-accent" />
            <span>典型用户画像与推荐选型参考</span>
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-left">
            {DECISION_PROFILES.map((profile, prIdx) => (
              <div key={prIdx} className="p-4 rounded-xl bg-brand-primary/50 border border-brand-border space-y-2">
                <span className="font-bold text-brand-text-heading block text-sm pb-2 border-b border-brand-border">
                  {profile.name}
                </span>
                <p className="text-slate-400 text-[11px]">
                  <strong className="text-slate-300">目标群体：</strong>{profile.targetRole}
                </p>
                <p className="text-slate-400 text-[11px]">
                  <strong className="text-slate-300">流量推荐：</strong>{profile.trafficAdvice}
                </p>
                <p className="text-slate-400 text-[11px]">
                  <strong className="text-slate-300">设备与周期：</strong>{profile.deviceAdvice} · {profile.cycleAdvice}
                </p>
                <p className="text-slate-300 text-[11px] pt-1 leading-relaxed">
                  {profile.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部严格合规公示横幅与统一操作入口 */}
      <div className="mt-12 p-6 rounded-2xl bg-brand-surface border border-brand-border shadow-sm text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-accent">
              <ShieldCheck className="w-4 h-4" />
              <span>{PRICING_VERIFICATION.complianceNotice}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              数据来源：<code className="text-brand-accent font-mono">{PRICING_VERIFICATION.sourceUrl}</code> · 
              核验基准日期：<span className="font-mono text-slate-300">{PRICING_VERIFICATION.verificationDate}</span>。
              合作平台保留依据节点调度、汇率与运营策略动态调整套餐价格、促销活动与配额的权利，结算前请以最终页面显示为准。
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
              {AFF_DISCLOSURE_TEXT}
            </p>
          </div>

          <OfficialLink className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle flex-shrink-0">
            <span>前往合作平台查看当前套餐</span>
            <ArrowRight className="w-4 h-4" />
          </OfficialLink>
        </div>
      </div>
    </div>
  );
};

export default PricingGuide;
