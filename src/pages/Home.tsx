import React from 'react';
import {
  Hero,
  ServicesIntro,
  AdvantagesSection,
  WorkflowSection,
  ScenariosSection,
  PricingGuideSection,
  ScenarioCarousel,
  FAQSection,
  LocationsScopeSection,
} from '@/sections';

/**
 * 首页主页面（第6步：场景走马灯与 FAQ 已集成）
 * 结构顺序：
 * 1. Hero 区域
 * 2. 服务介绍 (ServicesIntro)
 * 3. 核心优势 (AdvantagesSection)
 * 4. 使用流程 (WorkflowSection)
 * 5. 使用场景 (ScenariosSection)
 * 6. 套餐选型指南 (PricingGuideSection)
 * 7. 场景体验走马灯 (ScenarioCarousel)
 * 8. 常见问题解答 (FAQSection)
 * 9. 全球线路或服务范围 (LocationsScopeSection)
 */
export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 首页 Hero 区域 */}
      <Hero />

      {/* 1. 服务介绍 */}
      <ServicesIntro />

      {/* 2. 核心优势 */}
      <AdvantagesSection />

      {/* 3. 使用流程 */}
      <WorkflowSection />

      {/* 4. 使用场景 */}
      <ScenariosSection />

      {/* 5. 套餐选型指南 */}
      <PricingGuideSection />

      {/* 6. 场景体验走马灯 */}
      <ScenarioCarousel />

      {/* 7. 常见问题解答 FAQ */}
      <FAQSection />

      {/* 8. 全球线路或服务范围 */}
      <LocationsScopeSection />
    </div>
  );
};

export default Home;
