import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, AFF_DISCLOSURE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ChevronRight,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  ArrowUpRight,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Sparkles,
  Home,
} from 'lucide-react';

/**
 * /downloads/ 客户端获取与多平台配置指引页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 涵盖 iOS、Android、Windows、macOS 四类平台入口
 * 3. 明确标注：“支持情况与获取方式以合作平台说明为准”
 * 4. 严禁声称存在未经验证的专属客户端，严禁伪造虚假直链安装包
 * 5. 每个平台采用 OfficialLink 前往合作平台核实并获取，按钮文字统一为“前往合作平台获取”
 * 6. AFF 入口数量：共 4 个（每个平台卡片对应 1 个）
 */
export const DownloadsPage: React.FC = () => {
  useEffect(() => {
    document.title = `多平台客户端获取与配置指引 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const downloadPlatforms = [
    {
      id: 'windows',
      name: 'Windows 桌面端',
      tag: 'Windows 10 / 11 架构适配',
      icon: Monitor,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '主流通用代理客户端适配方案，支持系统级全局或分流规则接管，集成开机静默启动与订阅自动化更新。',
      specifications: [
        '支持 64 位 x86_64 及 ARM64 硬件架构',
        '图形化系统托盘驻留，无感知长连接后台运行',
        '适配常用命令行代理与开发工具链',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'macos',
      name: 'macOS 桌面端',
      tag: 'Apple Silicon & Intel 架构适配',
      icon: Laptop,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '支持 macOS 最新操作系统，提供深色模式适配、Menubar 菜单状态栏快捷切换与高效分流规则托管。',
      specifications: [
        '原生适配 Apple M 系列芯片与 Intel 处理器',
        '支持深层混淆协议栈，系统资源占用微小',
        '提供一键导入订阅配置链接',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS 移动端',
      tag: 'iPhone & iPad 通用生态适配',
      icon: Tablet,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '通过系统级网络扩展机制，配合主流受支持的应用工具导入配置，实现随时随地的平稳漫游与按需连接。',
      specifications: [
        '适配 iOS / iPadOS 最新稳定版本',
        '支持快捷指令自动化切换与按需连接',
        '针对移动网络低功耗特性深度优化',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'android',
      name: 'Android 移动端',
      tag: '全品牌 Android 手机与平板适配',
      icon: Smartphone,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '支持独立应用分流模式（Split Tunneling），仅将海外应用流量走专用通道，保持国内应用原速本地直连。',
      specifications: [
        '兼容主流手机品牌定制系统及原生系统',
        '支持精细化应用级独立分流配置',
        '一键扫码导入或订阅托管解析',
      ],
      ctaText: '前往合作平台获取',
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
            客户端下载
          </span>
        </nav>

        {/* 页面独立 Header 区：唯一 H1 与客观指引简介 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>客户端指引 · 全平台适配</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME} 客户端获取与配置指引
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            本站为您汇总四大主流操作系统（iOS、Android、Windows、macOS）的客户端获取方式与环境适配指引。本站不托管任何非公开第三方安装文件，所有正式订阅配置与受验证的客户端工具均由合作平台统一提供。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>严禁伪造虚假直链安装包</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>不虚构未经核实的专属客户端</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>以合作平台最新版本说明为准</span>
            </div>
          </div>
        </div>

        {/* 合规核验告示横幅 */}
        <div className="mb-14 p-5 sm:p-6 rounded-2xl bg-amber-950/20 border border-amber-800/40 shadow-sm text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-900/30 border border-amber-700/50 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-base font-bold text-amber-200">
                客户端下载与平台兼容性核验须知
              </h2>
              <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                “支持情况与获取方式以合作平台说明为准”
              </p>
              <p className="text-xs text-amber-200/70 leading-relaxed pt-1">
                本站作为第三方信息指引站点，不声称存在所谓的“官方独家定制特制版”，不分发带有潜在安全隐患的未知安装包。请通过合作平台正规控制面板核实适用的通用客户端与对应版本安装文档。
              </p>
            </div>
          </div>
        </div>

        {/* 四大主流平台展示卡片（每个卡片 1 个 OfficialLink，共 4 个 AFF 入口） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {downloadPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all flex flex-col justify-between text-left shadow-subtle"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                      {platform.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-text-heading mb-2">
                    {platform.name}
                  </h3>

                  <div className="mb-4 inline-flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{platform.statusNotice}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  <div className="space-y-2 mb-8 p-4 rounded-xl bg-brand-primary/40 border border-brand-border/60">
                    <span className="text-xs font-semibold text-slate-200 block mb-1">
                      技术规格与环境特性：
                    </span>
                    {platform.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 平台卡片 CTA 按钮（OfficialLink 统一输出） */}
                <div className="pt-4 border-t border-brand-border">
                  <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle">
                    <span>{platform.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 商业推广说明 */}
        <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border text-xs text-slate-400 text-center mb-12">
          {AFF_DISCLOSURE_TEXT}
        </div>

        {/* 底部帮助与排错指引（纯站内 Link，0 AFF） */}
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="text-left">
            <h3 className="text-sm font-bold text-brand-text-heading">
              获取客户端后不知道如何配置？
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              查阅详细的规则分流导入图文手册与常见问题解答。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/help/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs sm:text-sm font-semibold transition-all shadow-subtle"
            >
              <HelpCircle className="w-4 h-4" />
              <span>查看配置与排错教程</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
