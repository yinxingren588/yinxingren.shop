import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Network,
  Lock,
  ArrowRight,
  Sparkles,
  Code2,
  Globe2,
  Laptop,
  CheckCircle2,
  SlidersHorizontal,
  Home,
} from 'lucide-react';

/**
 * /advantages/ 核心优势与选择价值页面
 * 
 * 规范要求：
 * 1. 唯一 H1：深度聚焦核心优势与选择价值
 * 2. 规范面包屑：首页 / 核心优势（纯站内 Link，AFF 严格为 0）
 * 3. 涵盖：5 项有依据的核心优势、典型使用场景解析、客观选择建议
 * 4. 严禁虚构性能数值，严禁编造与竞品的虚假对比结论
 * 5. 0 新增 AFF：底部操作均使用站内 Link
 */
export const AdvantagesPage: React.FC = () => {
  useEffect(() => {
    document.title = `核心优势与架构解析 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 移除临时 noindex，设置为正常收录
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const advantagesList = [
    {
      icon: ShieldCheck,
      badge: '隐私优先',
      title: '深层协议特征混淆与指纹伪装',
      desc: '不仅进行常规数据载荷加密，更针对握手数据包头与交互特征进行深度混淆处理，规避深度报文检测（DPI）算法的特征提取，在复杂信道中大幅降低干扰几率。',
    },
    {
      icon: Network,
      badge: '网络韧性',
      title: '多路径冗余与无感自动容灾',
      desc: '国际骨干网络受突发海缆维修或区域拥堵影响时，支持在客户端或路由网关端实施多备用节点自动轮转，保障长生命周期任务（如代码构建、远程服务器管理）平稳不中断。',
    },
    {
      icon: Zap,
      badge: '开箱即用',
      title: '轻量化配置导入与协议通用性',
      desc: '采用现代主流订阅通用格式，无需手动输入冗长的底层参数。一次导入即可自动解析节点元数据并支持按需更新，极大降低非技术人员与多设备用户的上手门槛。',
    },
    {
      icon: Laptop,
      badge: '全端漫游',
      title: '多系统全生态客户端无缝衔接',
      desc: '全面兼容主流个人桌面系统（Windows/macOS/Linux）与移动设备（iOS/Android），一个账户规格满足多终端日常交替协同，无论办公桌前还是旅途漫游皆可一致体验。',
    },
    {
      icon: Lock,
      badge: '中立透明',
      title: '坚持客观真实的第三方导航原则',
      desc: '本站清晰标注第三方推广合作属性，绝不为了赚取佣金而虚构不可信的“全网第一”或“永不掉线”承诺，始终提供真实、客观、经得起检验的技术指引与选型参考。',
    },
  ];

  const scenarioApplications = [
    {
      icon: Code2,
      role: '跨境研发工程师',
      focus: '代码托管、海外镜像拉取、云原生联调',
      value:
        '通过域名分流，实现境内外流量自动分流，国内镜像直连加速，海外 API 与 Git 专用隧道同步，杜绝命令行长时间拉取超时报错。',
    },
    {
      icon: Globe2,
      role: '跨境出海运营团队',
      focus: '多平台电商店铺运营、海外社媒矩阵管理',
      value:
        '提供一致性的线路接入与低网络抖动保障，降低因网络频繁变动触发的异地安全验证，支持多设备并发平稳上传图文与视讯。',
    },
    {
      icon: Laptop,
      role: '跨国远程雇员与游民',
      focus: '跨时区视讯会议、公共 Wi-Fi 私密漫游',
      value:
        '在开放公共网络下建立端到端加密防护隧道，防止不可信网络嗅探，多线路备用机制确保关键跨国沟通不被网络偶发抖动打断。',
    },
  ];

  const selectionAdvice = [
    {
      title: '根据通信频率与并发合理选型',
      description:
        '对于单人日常轻量办公，入门级配置即可满足需求；若涉及跨国团队多人多设备协作，建议关注支持多并发的规格，保障高并发下的带宽充裕。',
    },
    {
      title: '善用智能分流规则减少损耗',
      description:
        '避免全流量全局走代理通道。在客户端中开启智能规则分流，不仅能优化整体网络响应，还能有效节约每月流量配额。',
    },
    {
      title: '常备异地备用通道提升容灾力',
      description:
        '国际海缆与骨干网具备物理波动性，没有任何单一物理节点能永远保持零故障。合理配置主备双节点是保障业务连续性的黄金法则。',
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
            核心优势
          </span>
        </nav>

        {/* 页面独立 Header 区：唯一 H1 与核心优势综述 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>核心价值 · 架构解析</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME}核心优势与架构选型价值
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            深入剖析{BRAND_NAME}（{BRAND_NAME_EN}）在协议混淆传输、多端配置适配及网络容灾架构中的关键优势。我们拒绝浮夸包装与未经证实的绝对化承诺，始终立足于客观架构原理，为出海用户提供经得起推敲的选择建议。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border text-xs text-slate-300 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>无虚构参数与绝对化夸大</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>无伪造同行竞品对比结论</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span>架构级隐私与高韧性容灾</span>
            </div>
          </div>
        </div>

        {/* 5 项有依据的核心优势 */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              五大核心优势体系
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              聚焦于连接的隐匿性、跨端通用性与韧性保障，构建坚实技术基底。
            </p>
          </div>

          <div className="space-y-4">
            {advantagesList.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent flex-shrink-0 shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                          {adv.badge}
                        </span>
                        <h3 className="text-base font-bold text-brand-text-heading">
                          {adv.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                        {adv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center text-slate-500 text-xs font-mono flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mr-1" />
                    <span>规范验证</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 典型使用场景深度解析 */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              典型应用场景赋能深度
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              立足真实业务工作流，深入解析方案在不同场景中的落地价值。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarioApplications.map((sc, sIdx) => {
              const Icon = sc.icon;
              return (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all text-left shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-brand-text-heading mb-1">
                      {sc.role}
                    </h3>
                    <p className="text-xs text-brand-accent font-mono mb-4">
                      {sc.focus}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sc.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 客观选择建议与站内 CTA */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 text-left mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading mb-6">
            专业选型建议与避坑准则
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {selectionAdvice.map((sa, saIdx) => (
              <div
                key={saIdx}
                className="p-5 rounded-xl bg-brand-primary/50 border border-brand-border"
              >
                <h3 className="text-sm font-bold text-brand-text-heading mb-2">
                  {sa.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {sa.description}
                </p>
              </div>
            ))}
          </div>

          {/* 底部引导栏（纯站内 Link，0 AFF） */}
          <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              了解了架构优势后，您可以进一步对比各套餐规格或查看服务细节。
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/pricing/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs sm:text-sm transition-all shadow-subtle w-full sm:w-auto"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>查看套餐选型</span>
              </Link>
              <Link
                to="/services/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs sm:text-sm transition-all shadow-subtle w-full sm:w-auto"
              >
                <span>查阅服务介绍</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesPage;
