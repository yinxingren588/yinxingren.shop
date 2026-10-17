import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  AlertCircle,
  Compass,
  Radio,
  Shuffle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  SlidersHorizontal,
  Home,
} from 'lucide-react';

/**
 * /locations/ 服务线路范围与选型指引页面
 * 
 * 规范要求：
 * 1. 唯一 H1：清晰聚焦服务线路范围与客观选型参考
 * 2. 规范面包屑：首页 / 服务范围（纯站内 Link，AFF 严格为 0）
 * 3. 严格标注：“具体线路与节点以客户端实际显示为准”
 * 4. 无法确认的地区分类仅作为“选型考量维度”，绝不表述为品牌实际已提供的已确认线路
 * 5. 严禁虚构延迟、节点数量、覆盖国家数量或实时状态；绝不用地图暗示覆盖
 * 6. 0 新增 AFF：操作均使用站内 Link
 */
export const LocationsPage: React.FC = () => {
  useEffect(() => {
    document.title = `服务范围与线路选型指南 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 移除临时 noindex，设置为正常收录
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const regionalDimensions = [
    {
      title: '近距离亚太接入考量维度',
      subtitle: '优先考量物理传播时延与高频交互',
      characteristics: '物理距离近，光电信号在海底光缆中的物理往返跳数较少。',
      recommendation:
        '在处理日常交互密集型任务（如远程桌面联调、频繁的小型 API 接口调试及高频网页浏览）时，推荐优先尝试本地运营商直连距离较近的可用接入点。',
      cautions: '遇晚间高峰跨国骨干出口拥堵时，建议尝试切换备用路由。',
    },
    {
      title: '跨洋欧美区域考量维度',
      subtitle: '注重代码托管源与特定出海业务落地',
      characteristics: '国际骨干网带宽宽裕，但物理往返时延受物理光速规律限制。',
      recommendation:
        '在涉及特定跨国企业云平台服务、开源社区服务器直连或本地化数据同步时，选择目标服务落地所在大洲的可用通道能够规避某些二次跨国转发问题。',
      cautions: '不可期望跨洋线路具备本土局域网般的超低时延，此为客观物理规律。',
    },
    {
      title: '中继与容灾备用考量维度',
      subtitle: '针对国际网络波动构建的故障保护',
      characteristics: '多可用区动态分配，常备应急冗余通道。',
      recommendation:
        '无论主用线路多稳定，均建议在客户端收藏列表中预留 2-3 个异地备用节点。一旦遭遇海缆检修或网络波动，可快速手动切换，避免工作完全停摆。',
      cautions: '备用通道日常可作为辅助分流，降低单点拥堵几率。',
    },
  ];

  const selectionGuidelines = [
    {
      icon: Compass,
      title: '基于物理距离的初选法则',
      desc: '光在光纤中的传播速度有限，物理距离决定了时延下限。若无特定海外本地化业务需求，优先选择物理距离近的节点往往能获得最佳响应。',
    },
    {
      icon: Radio,
      title: '精细化域名按需分流策略',
      desc: '避免在客户端开启“全局代理”模式。将国内常用站点与办公软件列入直连名单，仅将跨境研发与协同域名走加密隧道，既节约配额又提升速度。',
    },
    {
      icon: Shuffle,
      title: '应对国际骨干网波动的动态换线',
      desc: '公网状态时刻处于动态调整中。在客户端遇到偶发丢包时，先查看本地 Wi-Fi 是否有丢包，再通过客户端一键刷新订阅获取最新健康节点池。',
    },
  ];

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
            服务范围
          </span>
        </nav>

        {/* 页面独立 Header 区：唯一 H1 与客观选型指引 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>拓扑认知 · 客观选型</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME}服务范围与线路选型指南
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            跨境网络通信状态受跨国骨干网波动、运营商路由策略及物理传输距离多重因素影响。本站作为第三方信息指引平台，不虚构未经验证的节点规模或夸大覆盖范围，始终坚持提供真实的拓扑原理与科学的选型指南。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>严禁虚构毫秒级虚假延迟</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>严禁使用虚假地图暗示覆盖</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>动态调度以实际订阅为准</span>
            </div>
          </div>
        </div>

        {/* 核心合规告示横幅：严格统一标注规范声明 */}
        <div className="mb-16 p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 shadow-sm text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-700/50 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-amber-200">
                服务范围与实时线路核验声明
              </h2>
              <p className="text-sm font-semibold text-amber-300">
                “具体线路、节点与可用服务以合作平台客户端实际显示为准。”
              </p>
              <p className="text-xs text-amber-200/70 leading-relaxed">
                本站作为中立的信息导航与技术解析站，严禁虚构未经核实的节点数量、延迟数据、专线类型或覆盖国家数量。合作平台的实际服务器部署与线路调度具备动态演进特征，请以您在合作平台客户端内拉取的最新节点清单为准。
              </p>
            </div>
          </div>
        </div>

        {/* 地区选择考量维度（非确认线路，仅为选型方法论） */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              三大地区选择参考考量维度
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              基于物理传输规律与出海业务特性，以下考量维度用于辅助用户建立理性的线路选择预期。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regionalDimensions.map((dim, dIdx) => (
              <div
                key={dIdx}
                className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold block w-fit mb-3">
                    考量参考 {dIdx + 1}
                  </span>
                  <h3 className="text-base font-bold text-brand-text-heading mb-1">
                    {dim.title}
                  </h3>
                  <p className="text-xs text-brand-accent font-mono mb-4">
                    {dim.subtitle}
                  </p>

                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                    <p>
                      <strong className="text-slate-200">物理特性：</strong>
                      {dim.characteristics}
                    </p>
                    <p>
                      <strong className="text-slate-200">选型建议：</strong>
                      {dim.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border text-[11px] text-slate-400">
                  <span className="text-amber-400 mr-1">注意：</span>
                  {dim.cautions}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 三大客观选型法则 */}
        <div className="mb-16 border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading mb-6">
            网络拓扑与理性连接准则
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectionGuidelines.map((sg, sgIdx) => {
              const Icon = sg.icon;
              return (
                <div
                  key={sgIdx}
                  className="p-5 rounded-xl bg-brand-primary/50 border border-brand-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-text-heading mb-2">
                    {sg.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {sg.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部引导栏（纯站内 Link，0 AFF） */}
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle mb-12">
          <div className="text-left">
            <h3 className="text-sm font-bold text-brand-text-heading">
              准备好根据您的业务场景选择合适方案了吗？
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              查看套餐选型指南或参阅常见网络连接排错手册。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/pricing/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>查看套餐选型</span>
            </Link>
            <Link
              to="/help/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs sm:text-sm transition-all shadow-subtle"
            >
              <HelpCircle className="w-4 h-4" />
              <span>常见排错问答</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
