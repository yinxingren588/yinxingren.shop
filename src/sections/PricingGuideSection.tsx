import React from 'react';
import { Sparkles } from 'lucide-react';
import PricingGuide from '@/components/PricingGuide';

/**
 * 首页套餐与方案选型分区组件 (PricingGuideSection)
 * 规则要求：与 /pricing/ 页面共用同一套数据源与展示逻辑
 */
export const PricingGuideSection: React.FC = () => {
  return (
    <section
      aria-labelledby="pricing-section-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>方案选型 · 真实核验</span>
          </div>
          <h2
            id="pricing-section-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading"
          >
            套餐选型指南与方案规格解析
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            涵盖 6 款按月/按年循环重置的周期方案，以及 3 款永不过期的一次性独立买断流量包。支持依据实际业务规模理性选型。
          </p>
        </div>

        {/* 统一复用 PricingGuide 核心组件 */}
        <PricingGuide isPage={false} />
      </div>
    </section>
  );
};

export default PricingGuideSection;
