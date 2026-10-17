import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import PricingGuide from '@/components/PricingGuide';
import { ChevronRight, Home, CreditCard } from 'lucide-react';

/**
 * 订阅套餐页面 (/pricing/)
 * 
 * 规则要求：
 * 1. 具备独立 H1、独立简介和面包屑导航。
 * 2. 重点回答本品牌套餐选择相关搜索需求，不复制整段首页介绍。
 * 3. 面包屑与站内导航严禁包含 AFF，仅限纯站内 Link。
 * 4. 复用 PricingGuide 核心组件与 pricingData 统一数据源。
 */
export const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = `订阅套餐选型指南与规格解析 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-brand-bg py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航（纯站内 Link，AFF 严格为 0） */}
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
            订阅套餐
          </span>
        </nav>

        {/* 页面独立 Header 区：独立 H1 与搜索意图答疑简介 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <CreditCard className="w-3.5 h-3.5 text-brand-accent" />
            <span>官方配套规格核验 · 决策指南</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME}套餐选型指南与订阅方案解析
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            本页面重点梳理{BRAND_NAME}（{BRAND_NAME_EN}）合作平台当前上架的 9 大正式配套规格。全面覆盖按月/按年循环刷新的周期订阅方案（适合日常稳定出海），以及一次性买断且永不过期的独立流量包（适合商务差旅与终身网络备用）。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>全节点 x1 标准计费倍率</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>多周期灵活切换（支持月付/年付）</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>买断包永不过期（免续费焦虑）</span>
            </div>
          </div>
        </div>

        {/* 统一复用方案选型指南组件 */}
        <PricingGuide isPage={true} />
      </div>
    </div>
  );
};

export default PricingPage;
