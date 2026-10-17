import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Compass, Radio, Shuffle } from 'lucide-react';

/**
 * 板块 5：全球线路或服务范围 (LocationsScopeSection)
 * 排版结构：合规公示告示看板 + 3 维度客观拓扑选型法则（Notice Board + 3-Dimension Methodology）
 * 规则要求：
 * 1. 严格统一标注：“具体线路、节点与可用服务以合作平台客户端实际显示为准。”
 * 2. 严禁虚构节点数量、延迟、专线类型或覆盖国家数量。
 * 3. 严禁使用世界地图或地区清单暗示已确认覆盖。
 * 4. 底部按钮使用站内 Link，不新增 AFF。
 */
export const LocationsScopeSection: React.FC = () => {
  return (
    <section
      aria-labelledby="locations-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <span>线路指引 · 客观原则</span>
          </div>
          <h2
            id="locations-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading"
          >
            服务范围与线路拓扑选型指南
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            跨境网络状态受国际骨干网波动、运营商路由策略及物理传输距离多重因素影响。本站秉持真实合规原则，提供客观选型方法论。
          </p>
        </div>

        {/* 核心合规告示横幅：严格标注规范文案 */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-700/50 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="text-sm sm:text-base font-bold text-amber-200">
                服务范围与实时线路核验声明
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-amber-300">
                “具体线路、节点与可用服务以合作平台客户端实际显示为准。”
              </p>
              <p className="text-xs text-amber-200/70 leading-relaxed pt-1">
                本站作为第三方信息导航站点，不虚构未经验证的节点规模、物理延迟或跨国专线类型。合作平台的节点维护与线路调度具备动态性，请以最新订阅获取的实际节点清单为准。
              </p>
            </div>
          </div>
        </div>

        {/* 3 维度理性选型建议（非虚假地图，非虚假列表） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle">
            <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text-heading mb-2">
              物理距离与中转跃点
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              光电信号在光纤中传播存在物理极限。推荐优先连接地理坐标更近的可用线路，减少中转节点跳数，从而获得更平稳的基础响应。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle">
            <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-4">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text-heading mb-2">
              业务类型与分流策略
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              针对海外代码仓库、云服务 API 及海外社媒等多重场景，建议在客户端内配置基于域名的智能分流，避免全局代理带来的不必要资源消耗。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle">
            <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-4">
              <Shuffle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-brand-text-heading mb-2">
              高峰拥堵与自动容灾
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              国际骨干网在特定时间可能因海缆检修或流量激增产生波动。建议常备至少两条异地备用通道，遇到偶发波动时手动刷新或自动切换。
            </p>
          </div>
        </div>

        {/* 底部站内链接引导（0 AFF） */}
        <div className="text-center">
          <Link
            to="/locations/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-surface hover:bg-brand-primary border border-brand-border text-sm font-semibold text-brand-text-heading hover:text-brand-accent transition-all shadow-subtle"
          >
            <span>查阅详细服务范围与线路排错指南</span>
            <ArrowRight className="w-4 h-4 text-brand-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsScopeSection;
