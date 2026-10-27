import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouteSeo } from '@/hooks/useRouteSeo';

/**
 * MainLayout 基础布局组件
 * 规则要求：
 * 1. 结构包含：Navbar -> main -> Outlet -> Footer
 * 2. Outlet 放置在 main 内部，避免嵌套多个 main
 * 3. 页头与页脚在全局维护统一样式与合规逻辑
 * 4. 路由切换时自动更新全局 SEO 元数据与 Canonical
 */
export const MainLayout: React.FC = () => {
  useRouteSeo();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text-body selection:bg-brand-accent selection:text-black relative overflow-x-hidden">
      {/* 现代分层环境光效与科技背景架构 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-emerald-500/12 via-teal-500/5 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_65%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* 顶部主导航栏 */}
      <Navbar />

      {/* 唯一主内容区域容器，Outlet 放在 main 内部 */}
      <main id="main-content" className="flex-1 focus:outline-none w-full">
        <Outlet />
      </main>

      {/* 真实四栏页脚 */}
      <Footer />
    </div>
  );
};

export default MainLayout;
