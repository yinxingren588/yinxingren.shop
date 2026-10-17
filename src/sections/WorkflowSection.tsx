import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ExternalLink, Download, ShieldCheck } from 'lucide-react';

/**
 * 板块 3：使用流程 (WorkflowSection)
 * 排版结构：三步序列连接管线（Horizontal 3-Step Stepped Pipeline）
 * 规则要求：
 * 1. 如实描述为：1. 了解并选择方案；2. 前往合作平台完成订阅；3. 获取客户端并按照指引使用。
 * 2. 严禁描述不存在的本站账户、支付和订单系统。
 * 3. 底部按钮使用站内 Link，不新增 AFF。
 */
export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '了解并选择方案',
      description:
        '在本站客观查阅场景选型建议与配置指南，结合个人跨境协作频率与设备生态，明确适合自身的订阅方案。',
      note: '客观选型 · 明确自身需求',
    },
    {
      num: '02',
      icon: ExternalLink,
      title: '前往合作平台完成订阅',
      description:
        '通过指引链接前往受支持的第三方合作平台，在合作平台系统内自主完成套餐选型、账户激活与订阅购买。',
      note: '结算直接由合作平台承保',
    },
    {
      num: '03',
      icon: Download,
      title: '获取客户端并按照指引使用',
      description:
        '参照本站提供的图文教程，下载适配您操作系统的客户端软件，导入订阅链接并按照分流指引开启连接。',
      note: '全平台详尽图文配置指引',
    },
  ];

  return (
    <section
      aria-labelledby="workflow-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <span>极简透明 · 三步接入</span>
          </div>
          <h2
            id="workflow-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading"
          >
            极简接入三步指引
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            本站不设任何中间账户门槛或隐性支付流程，只需遵循标准化三步指引，即可完成配置并开始使用。
          </p>
        </div>

        {/* 横向步骤流转轴布局 */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* 桌面端水平连接虚线 */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] border-t border-dashed border-brand-border -translate-y-8 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-card hover:border-brand-border-hover transition-all"
              >
                {/* 序号与图标圆形徽章 */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent shadow-subtle">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-brand-accent text-black text-[11px] font-mono font-bold shadow-sm">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-text-heading mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="mt-auto w-full pt-4 border-t border-brand-border text-[11px] text-slate-400 font-mono">
                  {step.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* 流程底部说明与站内链接引导（0 AFF） */}
        <div className="mt-12 p-5 rounded-xl bg-brand-surface/70 border border-brand-border text-center max-w-2xl mx-auto shadow-subtle">
          <div className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span>本站专注于使用指引与第三方客观解析，不设任何自有充值、收银或账户系统。</span>
          </div>
          <Link
            to="/help/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:text-brand-accent-hover hover:underline"
          >
            <span>查看完整客户端安装与新手避坑指引</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
