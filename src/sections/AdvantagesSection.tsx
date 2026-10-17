import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import { ArrowRight, EyeOff, Network, Smartphone, ShieldCheck } from 'lucide-react';

/**
 * 板块 2：核心优势 (AdvantagesSection)
 * 排版结构：2×2 双列架构特性深度展板（与板块 1 的不对称双栏明显区隔）
 * 规则要求：使用清晰 H2，围绕本品牌与真实服务，按钮使用站内 Link，不新增 AFF
 */
export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: EyeOff,
      tag: '隐匿传输',
      title: '低特征混淆协议传输机制',
      description:
        '通过现代加密通道与特征混淆算法封装数据包，降低网络数据在国际网关上的模式识别概率，减少异常丢包与连接阻断。',
      featureTag: '架构级隐私保护',
    },
    {
      icon: Network,
      tag: '拓扑冗余',
      title: '多节点冗余备份与容灾理念',
      description:
        '建议用户保持多条可用备用线路配置，在特定国际海缆维护或骨干网拥堵时支持平滑切换，保障跨国研发协作持续连通。',
      featureTag: '高韧性容灾机制',
    },
    {
      icon: Smartphone,
      tag: '跨端覆盖',
      title: '主流客户端全生态适配指导',
      description:
        '全面兼容 Windows、macOS、iOS、Android 以及主流开源路由工具，单份配置订阅即可实现全终端设备平滑覆盖。',
      featureTag: '全生态工具适配',
    },
    {
      icon: ShieldCheck,
      tag: '客观中立',
      title: '透明第三方使用与选型规范',
      description:
        '明确标注商业推广与中立导航属性，绝不夸大节点指标或虚构技术能力，始终为用户提供可验证的实测参考与避坑指南。',
      featureTag: '真实客观承诺',
    },
  ];

  return (
    <section
      aria-labelledby="advantages-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部标题区 */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <span>核心价值 · 架构优势</span>
          </div>
          <h2
            id="advantages-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading leading-tight"
          >
            为什么选择{BRAND_NAME}连接方案？
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            摒弃浮夸营销与虚假数据宣传，聚焦于网络连接的隐匿性、跨平台兼容性与高韧性，为现代出海数字工作流筑造纯净基础。
          </p>
        </div>

        {/* 2×2 错落架构网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-brand-bg border border-brand-border hover:border-brand-border-hover transition-all flex flex-col justify-between shadow-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-text-heading group-hover:text-brand-accent transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border flex items-center text-xs font-mono text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2" />
                  <span>{item.featureTag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部站内跳转引导（0 AFF） */}
        <div className="mt-12 text-center">
          <Link
            to="/advantages/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-sm font-medium text-slate-200 hover:text-brand-accent transition-all shadow-subtle"
          >
            <span>深入了解核心优势与架构考量</span>
            <ArrowRight className="w-4 h-4 text-brand-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
