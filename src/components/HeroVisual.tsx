import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

/**
 * 首页 Hero 右侧品牌视觉卡片组件
 * 
 * 展示用户的官方 Logo 形象，保持整体暗色科技感质感，
 * 搭配环境微光与底部特性铭牌。
 */
export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[460px] mx-auto select-none rounded-2xl border border-brand-border bg-brand-surface p-5 sm:p-7 shadow-card overflow-hidden"
      aria-label={`${BRAND_NAME} 品牌形象标志展示`}
    >
      {/* 幽暗坐标网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* 顶部排版标头 */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 mb-4 border-b border-brand-border text-[11px] font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-sm bg-brand-accent" />
          <span className="tracking-widest uppercase font-semibold">
            {BRAND_NAME_EN} // BRAND LOGO
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-brand-accent text-[10px] tracking-wider uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          <span>OFFICIAL EMBLEM</span>
        </div>
      </div>

      {/* 核心展示区：品牌官方 Logo 图片 */}
      <div className="relative z-10 py-3 sm:py-5 flex items-center justify-center">
        {/* 背景微光环 */}
        <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-brand-accent/10 blur-2xl pointer-events-none" />

        {/* Logo 图像卡片容器 */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white p-3 sm:p-4 shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden group transition-all duration-300 hover:shadow-brand-accent/20">
          <img
            src="/logo.jpg"
            alt={`${BRAND_NAME} 品牌标志`}
            className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
            width={288}
            height={288}
            loading="eager"
          />
        </div>
      </div>

      {/* 底部参数与特性铭牌 */}
      <div className="relative z-10 pt-3.5 mt-2 border-t border-brand-border grid grid-cols-2 gap-3 text-left">
        <div className="p-2.5 rounded-lg bg-brand-primary/50 border border-brand-border">
          <div className="text-[10px] uppercase font-mono text-slate-400 font-semibold">
            混淆机制架构
          </div>
          <div className="text-xs font-semibold text-brand-text-heading mt-0.5 truncate">
            流量深度混淆封装
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-brand-primary/50 border border-brand-border">
          <div className="text-[10px] uppercase font-mono text-slate-400 font-semibold">
            客户端生态适配
          </div>
          <div className="text-xs font-semibold text-brand-text-heading mt-0.5 truncate">
            跨端全平台分流指引
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
