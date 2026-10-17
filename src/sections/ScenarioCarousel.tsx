import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SCENARIOS_DATA, SCENARIO_DISCLAIMER } from '@/data/scenarioData';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Briefcase,
  Sparkles,
} from 'lucide-react';

/**
 * 场景体验走马灯组件 (ScenarioCarousel)
 * 
 * 规范实现：
 * 1. 桌面每屏 3 项、平板每屏 2 项、手机每屏 1 项
 * 2. 支持 Prev/Next 按钮、触摸滑动 (Touch Swipe)、键盘方向键控制
 * 3. 鼠标悬停、键盘聚焦、后台切屏时自动暂停播放
 * 4. 显式提供播放/暂停手动切换操作按钮 (A11y 可访问性)
 * 5. prefers-reduced-motion 下强制关闭自动播放
 * 6. 无虚假评论、无假头像、无假评分，标注规范免责说明
 */
export const ScenarioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 监听视口尺寸，计算每屏展示项目数量
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 监听 prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 监听标签页可见性变化 (document.visibilityState)
  useEffect(() => {
    const handleVisibility = () => {
      setIsPageHidden(document.visibilityState === 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const maxIndex = Math.max(0, SCENARIOS_DATA.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // 自动播放逻辑：受控于悬停、聚焦、后台、用户手动暂停及 reduced-motion
  useEffect(() => {
    const shouldPause =
      isManualPaused ||
      isHovered ||
      isFocused ||
      isPageHidden ||
      prefersReducedMotion;

    if (shouldPause) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isManualPaused, isHovered, isFocused, isPageHidden, prefersReducedMotion, handleNext]);

  // 键盘操作响应
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // 触摸手势处理
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      aria-labelledby="carousel-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-bg select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 顶部标题与控制工具栏 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-3 shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
              <span>多维视角 · 场景体验参考</span>
            </div>
            <h2
              id="carousel-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading leading-tight"
            >
              典型工作流体验示例
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              汇聚不同业务形态下的代表性网络需求与连接配置示例，为出海工作流搭建提供参考。
            </p>
          </div>

          {/* 轮播交互控制器 */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* 播放/暂停控制按钮 */}
            <button
              type="button"
              onClick={() => setIsManualPaused((prev) => !prev)}
              aria-label={isManualPaused ? '开始轮播自动播放' : '暂停轮播自动播放'}
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-slate-300 hover:text-white hover:bg-brand-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shadow-subtle"
            >
              {isManualPaused ? (
                <Play className="w-4 h-4 text-brand-accent" />
              ) : (
                <Pause className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* 上一个 */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="查看上一组场景"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-slate-300 hover:text-white hover:bg-brand-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shadow-subtle"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 下一个 */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="查看下一组场景"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-slate-300 hover:text-white hover:bg-brand-primary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent shadow-subtle"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 走马灯滚动展示视口 */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="走马灯"
          aria-label="典型使用场景轮播"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {SCENARIOS_DATA.map((item, index) => {
              const isVisible =
                index >= currentIndex && index < currentIndex + itemsPerPage;

              return (
                <div
                  key={item.id}
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                  className="px-2.5 sm:px-3"
                  aria-hidden={!isVisible}
                >
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-border-hover transition-all flex flex-col justify-between text-left shadow-subtle">
                    <div>
                      {/* 标签栏 */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                          <Briefcase className="w-3 h-3 text-slate-400" />
                          <span>{item.targetRole}</span>
                        </div>
                      </div>

                      {/* 场景名称 */}
                      <h3 className="text-base font-bold text-brand-text-heading mb-3">
                        {item.sceneName}
                      </h3>

                      {/* 体验概述 */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        {item.experienceSummary}
                      </p>
                    </div>

                    {/* 适用工作流环境 */}
                    <div className="pt-4 border-t border-brand-border text-[11px] text-slate-400 font-mono flex items-center justify-between">
                      <span className="truncate">{item.workflowContext}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部指示器条 */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`切换至第 ${idx + 1} 屏`}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-6 bg-brand-accent'
                  : 'w-1.5 bg-brand-border hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* 规范强制声明条：严禁冒充实名用户评价 */}
        <div className="mt-8 p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            {SCENARIO_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScenarioCarousel;
