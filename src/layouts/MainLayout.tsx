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
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text-body selection:bg-brand-accent selection:text-black">
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
