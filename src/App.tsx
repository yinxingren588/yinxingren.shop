import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import {
  Home,
  ServicesPage,
  AdvantagesPage,
  LocationsPage,
  PricingPage,
  HelpPage,
  DownloadsPage,
  ContactPage,
  TermsPage,
  PrivacyPage,
  NotFoundPage,
} from '@/pages';

/**
 * 核心路由结构组件
 * 供客户端 BrowserRouter 和 SSR StaticRouter 共享，避免路由结构或正文不一致
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* 首页路由 */}
        <Route index element={<Home />} />

        {/* 业务核心内页 */}
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/" element={<ServicesPage />} />

        <Route path="advantages" element={<AdvantagesPage />} />
        <Route path="advantages/" element={<AdvantagesPage />} />

        <Route path="locations" element={<LocationsPage />} />
        <Route path="locations/" element={<LocationsPage />} />

        {/* 套餐选型独立页面 */}
        <Route path="pricing" element={<PricingPage />} />
        <Route path="pricing/" element={<PricingPage />} />

        {/* 帮助、下载与支持页面 */}
        <Route path="help" element={<HelpPage />} />
        <Route path="help/" element={<HelpPage />} />

        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="downloads/" element={<DownloadsPage />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="contact/" element={<ContactPage />} />

        {/* 法律政策与合规页面（AFF: 0 纯净合规） */}
        <Route path="terms" element={<TermsPage />} />
        <Route path="terms/" element={<TermsPage />} />

        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="privacy/" element={<PrivacyPage />} />

        {/* 404 通配符兜底路由 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
