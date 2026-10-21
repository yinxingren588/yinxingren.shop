import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';

/**
 * 板块 1：服务介绍 (ServicesIntro)
 * 排版结构：不对称双栏 (7:5) 图文互锁架构
 * 规则要求：使用清晰 H2，围绕本品牌与真实服务，按钮使用站内 Link，不新增 AFF
 */
export const ServicesIntro: React.FC = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧深度服务理念与架构阐述 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold shadow-subtle">
              <span>架构概览 · 服务体系</span>
            </div>

            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading leading-tight"
            >
              隐匿传输与跨端路由服务架构
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {BRAND_NAME}官网（{BRAND_NAME_EN}）专注于为跨国技术研发团队、数字出海企业及自由职业者提供客观严谨的{BRAND_NAME}机场网络连接服务指引。借助现代协议混淆与无特征封装技术，有效规避公共网络链路中的嗅探干扰与协议阻断，保障核心远程任务顺畅推进。
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              作为第三方中立使用指引平台，本站不直接运营任何收费节点或代理服务，而是致力于为出海用户提供客观的技术原理科普、全平台配置指引与合规使用规范，消除信息壁垒与配置认知障碍。
            </p>

            <div className="pt-2">
              <Link
                to="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors group"
              >
                <span>查阅完整服务体系与协议指引</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 右侧多维特性卡片栈 (5列) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-text-heading">
                    流量特征混淆封装
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    采用深度混淆封装策略，弱化网络数据包的统计特征，减少中间网络干扰，保持跨国长连接持续稳定。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-text-heading">
                    跨平台分流规则解耦
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    系统整理域名与 IP CIDR 精准分流规则，轻松适配终端命令行、Git 工具、海外云端 API 与本地网络环境。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-text-heading">
                    零门槛开箱指引
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    针对 Windows、macOS、iOS、Android 梳理标准化导入流程，无繁琐冗余配置，快速建立稳固连接。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
