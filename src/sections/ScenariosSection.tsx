import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Globe2, Briefcase, CheckCircle2, AlertTriangle } from 'lucide-react';

/**
 * 板块 4：使用场景 (ScenariosSection)
 * 排版结构：三列痛点与方案深度诊断展板（Problem-Solution Diagnostic Grid）
 * 规则要求：清晰 H2，围绕本品牌与真实服务，按钮使用站内 Link，不新增 AFF
 */
export const ScenariosSection: React.FC = () => {
  const scenarios = [
    {
      icon: Code2,
      role: '出海开发与开源协同',
      target: '全栈工程师 · 架构师 · 独立开发者',
      pain: '海外依赖包（npm / pip / cargo）拉取频频超时，Git 远程代码仓库克隆阻断，严重拖慢交付节奏。',
      solution: '采用深度特征混淆长连接，支持针对开发工具链的精细分流规则，保障跨国代码推送与拉取稳定。',
    },
    {
      icon: Globe2,
      role: '跨境出海与社媒运营',
      target: '跨境电商团队 · 出海营销 · 独立站操盘手',
      pain: '公用网络 IP 频繁跳跃引发社媒账号异地登录安全警报，多设备并发上传多媒体内容出现卡顿。',
      solution: '提供一致性线路配置指南，支持稳定带宽吞吐与低干扰数据传输，降低账号风控与网络冲突。',
    },
    {
      icon: Briefcase,
      role: '远程协作与数字游民',
      target: '跨国远程雇员 · 自由职业者 · 全球旅居者',
      pain: '在咖啡厅或公共共享空间使用不可信 Wi-Fi，个人隐私与商业机密面临网络嗅探与数字足迹暴露。',
      solution: '端到端数据封包加密混淆，多线路备份平滑兜底，全天候打造如同专属加密通道的安全漫游体验。',
    },
  ];

  return (
    <section
      aria-labelledby="scenarios-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <span>精准赋能 · 业务场景</span>
          </div>
          <h2
            id="scenarios-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading"
          >
            针对性赋能多元化数字出海场景
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            不同出海业务对网络连接的关注侧重点各不相同。隐形人连接方案通过精细化分流与混淆隧道，契合多样化工作流。
          </p>
        </div>

        {/* 痛点与方案对照卡片排版 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/80 hover:border-emerald-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.1)] transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3.5 pb-5 border-b border-slate-800/80">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-subtle group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-text-heading group-hover:text-emerald-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {item.target}
                      </p>
                    </div>
                  </div>

                  {/* 痛点对比 */}
                  <div className="mt-5 space-y-4">
                    <div className="p-4 rounded-xl bg-rose-950/25 border border-rose-900/50 text-left">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        <span>常见网络瓶颈</span>
                      </div>
                      <p className="text-xs text-rose-200/80 leading-relaxed">
                        {item.pain}
                      </p>
                    </div>

                    {/* 方案呈现 */}
                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-left shadow-subtle">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>隐形人方案建议</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>适用协议与配置已完备</span>
                  <Link
                    to="/services/"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 group-hover:underline"
                  >
                    <span>详情</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引导（0 AFF） */}
        <div className="mt-12 text-center">
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-sm font-medium text-slate-200 hover:text-brand-accent transition-all shadow-subtle"
          >
            <span>根据您的业务场景对比方案规格</span>
            <ArrowRight className="w-4 h-4 text-brand-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
