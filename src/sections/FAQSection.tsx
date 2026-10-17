import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '@/data/faqData';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquareCode } from 'lucide-react';

/**
 * 常见问题 FAQ 手风琴分区组件 (FAQSection)
 * 
 * 规范要求：
 * 1. 采用标准可访问手风琴（Accessible Accordion），折叠答案真实保留在 DOM 中
 * 2. aria-expanded 与 aria-controls 规范对齐，支持键盘交互
 * 3. 底部链接跳转 /help/ 和 /contact/，绝不使用 AFF
 */
export const FAQSection: React.FC = () => {
  // 默认展开第1项和第4项（包含官网与入口核对核心问题）
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'select-plan': true,
    'verify-official-site': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="py-16 md:py-24 border-b border-brand-border bg-brand-surface"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            <span>解疑释惑 · 快速指引</span>
          </div>
          <h2
            id="faq-section-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-text-heading leading-tight"
          >
            常见问题解答 (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl mx-auto">
            关于隐形人网络连接方案选型、客户端配置、官方入口核实及日常故障排查的精选解答。
          </p>
        </div>

        {/* 手风琴列表容器 */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = !!openItems[item.id];
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-brand-bg border border-brand-border overflow-hidden transition-colors hover:border-brand-border-hover shadow-subtle"
              >
                <h3 className="text-base font-medium m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-brand-text-heading hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-brand-accent font-bold w-5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-semibold">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-accent' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* 手风琴展开内容面板（存在于 DOM 中，无障碍友好） */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-[500px] opacity-100 p-5 sm:p-6 pt-0 border-t border-brand-border/40'
                      : 'max-h-0 opacity-0 overflow-hidden p-0'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部站内跳转引导（跳转 /help/ 和 /contact/，绝不使用 AFF） */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-bg border border-brand-border text-center shadow-subtle">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquareCode className="w-4 h-4 text-brand-accent" />
            <h3 className="text-sm font-semibold text-brand-text-heading">
              仍有疑问？探索更多支持文档与社群
            </h3>
          </div>
          <p className="text-xs text-slate-400 max-w-lg mx-auto mb-5 leading-relaxed">
            深入查阅详细配置指南，或通过官方频道与技术社群获取最新线路动态与互助交流。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/help/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-surface hover:bg-brand-primary text-brand-text-heading hover:text-brand-accent font-medium text-xs sm:text-sm border border-brand-border transition-all shadow-subtle"
            >
              <span>查阅帮助中心</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
            </Link>

            <Link
              to="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-brand-surface hover:bg-brand-primary text-brand-text-heading hover:text-brand-accent font-medium text-xs sm:text-sm border border-brand-border transition-all shadow-subtle"
            >
              <span>联系技术支持</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
