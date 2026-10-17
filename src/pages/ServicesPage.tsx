import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Monitor,
  Download,
  CheckCircle2,
  Workflow,
  Sparkles,
  Home,
} from 'lucide-react';

/**
 * /services/ 服务概览与技术方案页面
 * 
 * 规范要求：
 * 1. 唯一 H1：清晰表达服务概览与技术方案主题
 * 2. 规范面包屑：首页 / 服务介绍（纯站内 Link，AFF 严格为 0）
 * 3. 涵盖：服务概览、已核实核心能力、使用流程、多平台选择与支持说明、/downloads/ 入口
 * 4. 0 新增 AFF：所有按钮与指引全部采用站内 Link
 */
export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = `服务概览与协议分流指引 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 移除临时 noindex，设置为正常收录
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const coreCapabilities = [
    {
      icon: ShieldCheck,
      title: '高强度协议特征混淆',
      description:
        '采用先进加密隧道封装技术，将通信数据特征与常规 HTTPS 流量深度拟合，有效规避公共网关的主动探测与特征识别，保障通信会话在复杂网络环境中平稳维系。',
    },
    {
      icon: Layers,
      title: '多路径冗余容灾架构',
      description:
        '骨干节点之间支持基于健康度的智能动态切换。当某条海底光缆或特定跨洋链路发生偶发丢包与维护时，客户端可平滑切换至备用路径，避免研发会话中断。',
    },
    {
      icon: Terminal,
      title: '细粒度分流与开发环境兼容',
      description:
        '完美支持基于域名后缀、IP CIDR 的按需分流规则。国内常规访问直连提速，海外代码托管与云平台 API 经由专用隧道加速，极大节约不必要的跨国带宽消耗。',
    },
    {
      icon: Cpu,
      title: '轻量化与低系统开销',
      description:
        '核心协议栈针对主流硬件架构深度优化，客户端常驻后台内存占用微小，CPU 消耗低，适配各类轻薄笔记本与嵌入式边缘终端。',
    },
  ];

  const platforms = [
    {
      name: 'Windows',
      desc: '支持 Windows 10/11，提供图形化一键导入与系统代理无缝分流。',
    },
    {
      name: 'macOS',
      desc: '原生支持 Apple Silicon (M系列) 与 Intel 芯片，深度集成系统网络设置。',
    },
    {
      name: 'Linux',
      desc: '支持命令行 CLI 与守护进程模式，适合服务器开发与自动化 CI/CD 环境。',
    },
    {
      name: 'iOS / iPadOS',
      desc: '完美适配主流通用代理应用，支持按需规则与快捷指令自动化切换。',
    },
    {
      name: 'Android',
      desc: '适配现代 Android 系统，具备应用级独立分流与常驻网络保护模式。',
    },
    {
      name: '路由网关设备',
      desc: '支持在兼容的软路由与智能网关中配置透明代理，实现全屋或办公区统一加速。',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: '选型与规划',
      desc: '在本站客观查阅 4 大选型考量维度，根据日常团队规模与流量消耗明确方案目标。',
    },
    {
      step: '02',
      title: '前往合作平台订阅',
      desc: '通过本站导航直达合作服务平台收银台，在合作平台系统内安全结算并激活服务。',
    },
    {
      step: '03',
      title: '导入配置与按需分流',
      desc: '下载适配客户端，一键导入订阅配置并开启规则分流，开始安全顺畅的跨境连接。',
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
            服务介绍
          </span>
        </nav>

        {/* 页面独立 Header 区：唯一 H1 与深度服务概览 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>架构方案 · 服务体系</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME}服务概览与网络连接方案解析
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            系统梳理{BRAND_NAME}（{BRAND_NAME_EN}）底层连接特性、多平台协议兼容支持与落地配置规范。旨在为需要跨境跨洋传输、海外文献检索、云原生环境调试及多端协作的用户，提供严谨、透明、低门槛的第三方使用指引与架构解读。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>流量特征高强度混淆伪装</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>全平台主流客户端协议解耦</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>智能域名/IP按需精准分流</span>
            </div>
          </div>
        </div>

        {/* 核心能力解析矩阵 */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              已核实的核心连接能力
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              基于主流网络代理协议规范与专线网络特征，提炼以下 4 项核心技术支撑能力。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-4 shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-brand-text-heading mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center text-[11px] font-mono text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent mr-1.5" />
                    <span>核心特性已验证</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 使用流程解析 */}
        <div className="mb-16 border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 text-left">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase text-brand-accent">
            <Workflow className="w-4 h-4" />
            <span>Workflow Sequence</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading mb-6">
            标准接入与实施流程
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((ws, wIdx) => (
              <div
                key={wIdx}
                className="p-5 rounded-xl bg-brand-primary/50 border border-brand-border"
              >
                <span className="text-xs font-mono font-bold text-brand-accent block mb-2">
                  STEP {ws.step}
                </span>
                <h3 className="text-base font-bold text-brand-text-heading mb-2">
                  {ws.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 多平台支持与客户端入口 */}
        <div className="mb-12">
          <div className="text-left mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              全生态平台兼容与选择说明
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              广泛覆盖桌面工作站、移动终端及路由器网关，满足随时随地的安全网络漫游。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {platforms.map((p, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Monitor className="w-4 h-4 text-brand-accent" />
                  <h3 className="text-sm font-bold text-brand-text-heading">{p.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 底部站内 CTA 栏（跳转 /downloads/ 和 /pricing/，严格 0 AFF） */}
          <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
            <div className="text-left">
              <h3 className="text-sm font-bold text-brand-text-heading">
                准备好开始配置您的客户端了吗？
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                查阅详尽的跨平台客户端下载指引与分流配置教学。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/downloads/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle"
              >
                <Download className="w-4 h-4" />
                <span>前往客户端下载指引</span>
              </Link>
              <Link
                to="/pricing/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs sm:text-sm transition-all shadow-subtle"
              >
                <span>查看套餐选型</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
