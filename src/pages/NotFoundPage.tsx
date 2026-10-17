import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  Compass,
  Home,
  Layers,
  HelpCircle,
  ArrowLeft,
  ShieldAlert,
} from 'lucide-react';

/**
 * 404 页面未找到 (Not Found)
 * 
 * 规范要求：
 * 1. 使用 React Router 通配符匹配（path="*"）
 * 2. 绝对不自动跳转（无 setTimeout、无倒计时自动回首页）
 * 3. 提供返回首页、服务介绍和帮助中心等核心站内路径
 * 4. 独立错误页标题与清晰的未找到说明
 * 5. 强制设置 noindex, nofollow，严禁搜索引擎收录，不进入 Sitemap
 * 6. 整页 AFF 数量严格为 0（导航栏中已通过 matchedRoute.id === 'not-found' 自动隐藏 AFF 按钮）
 */
export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = `404 页面未找到 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    // 404 错误页面强制设置 noindex, nofollow
    let metaTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'robots';
      document.head.appendChild(metaTag);
    }
    metaTag.content = 'noindex, nofollow';

    return () => {
      if (metaTag) {
        metaTag.content = 'index, follow';
      }
    };
  }, []);

  const helpfulNavLinks = [
    {
      title: '站点首页',
      desc: '返回站点起始页面，探索整体服务架构与核心优势',
      to: '/',
      icon: Home,
    },
    {
      title: '服务介绍',
      desc: '查阅多协议封装、冗余路由与细粒度分流能力',
      to: '/services/',
      icon: Layers,
    },
    {
      title: '帮助中心',
      desc: '检索常见客户端导入、时钟校验与故障排查指引',
      to: '/help/',
      icon: HelpCircle,
    },
  ];

  return (
    <div className="w-full bg-brand-bg py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 核心错误提示卡片 */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface border border-brand-border shadow-card text-center">
          {/* 图标与状态徽章 */}
          <div className="w-16 h-16 rounded-2xl bg-brand-primary border border-brand-border flex items-center justify-center mx-auto mb-6 text-brand-accent shadow-subtle">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-brand-primary text-brand-accent text-xs font-mono font-semibold mb-4 border border-brand-border shadow-subtle">
            404 ERROR · HTTP NOT FOUND
          </div>

          {/* 独立错误标题 */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-text-heading mb-4 tracking-tight">
            抱歉，您访问的页面不存在或已被移除
          </h1>

          {/* 清晰未找到原因说明 */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-8">
            可能由于输入的链接地址有误、该资源已被重构合并，或者该功能板块暂未对外开放。本站不会对未找到的页面执行自动跳转，请通过下方导航选择所需路径。
          </p>

          {/* 核心操作按钮组（纯站内 Link，0 AFF） */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-black bg-brand-accent hover:bg-brand-accent-hover transition-all shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <Home className="w-4 h-4" />
              <span>返回站点首页</span>
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold text-slate-200 bg-brand-primary hover:bg-brand-primary/80 border border-brand-border transition-all shadow-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回上一页</span>
            </button>
          </div>

          {/* 常用导航入口快速直达卡片（纯站内 Link，0 AFF） */}
          <div className="pt-8 border-t border-brand-border text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
              您可能想查找的常用栏目
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {helpfulNavLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="p-4 rounded-xl bg-brand-primary/40 hover:bg-brand-primary/80 border border-brand-border hover:border-brand-border-hover transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-accent mb-2.5 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-brand-text-heading group-hover:text-brand-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 纯净合规底标 */}
          <div className="mt-8 pt-6 border-t border-brand-border/60 text-[11px] text-slate-500 flex items-center justify-center gap-2">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
            <span>纯净错误提示页 · 不自动跳转 · AFF 数量严格为 0 · 强制 noindex</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
