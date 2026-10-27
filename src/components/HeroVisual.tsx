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
      className="relative w-full max-w-[460px] mx-auto select-none rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden group"
      aria-label={`${BRAND_NAME} 品牌形象标志展示`}
    >
      {/* 科技角标装饰 (Corner Brackets) */}
      <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-emerald-400/50 pointer-events-none" />
      <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-emerald-400/50 pointer-events-none" />
      <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-emerald-400/50 pointer-events-none" />
      <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-emerald-400/50 pointer-events-none" />

      {/* 幽暗坐标网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* 顶部排版标头 */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80 text-[11px] font-mono">
        <div className="flex items-center space-x-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-sm bg-brand-accent animate-pulse" />
          <span className="tracking-widest uppercase font-semibold text-slate-300">
            {BRAND_NAME_EN} // BRAND LOGO
          </span>
        </div>
        <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-brand-accent text-[10px] tracking-wider uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          <span>OFFICIAL EMBLEM</span>
        </div>
      </div>

      {/* 核心展示区：品牌官方 Logo 图片与光幕底座 */}
      <div className="relative z-10 py-3 sm:py-5 flex items-center justify-center">
        {/* 背景微光环 */}
        <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none group-hover:bg-emerald-500/25 transition-all duration-500" />

        {/* Logo 图像卡片容器 */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white p-3.5 sm:p-4 shadow-[0_15px_40px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] group-hover:scale-[1.02]">
          <img
            src="/logo.jpg"
            alt={`${BRAND_NAME} 品牌标志`}
            className="w-full h-full object-contain rounded-xl transition-transform duration-500"
            width={288}
            height={288}
            loading="eager"
          />
        </div>
      </div>

      {/* 底部参数与特性铭牌 */}
      <div className="relative z-10 pt-3.5 mt-2 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-left">
        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-slate-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>混淆机制架构</span>
          </div>
          <div className="text-xs font-semibold text-brand-text-heading mt-1 truncate">
            流量深度混淆封装
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-slate-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>客户端生态适配</span>
          </div>
          <div className="text-xs font-semibold text-brand-text-heading mt-1 truncate">
            跨端全平台分流指引
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
