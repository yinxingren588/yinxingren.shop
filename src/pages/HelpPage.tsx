import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { HELP_ARTICLES, HelpArticle } from '@/data/helpData';
import {
  ChevronRight,
  Search,
  X,
  BookOpen,
  Filter,
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Home,
} from 'lucide-react';

/**
 * /help/ 帮助中心与使用指引页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航（0 AFF）
 * 2. 纯前端搜索与分类筛选，不产生动态 URL 路由污染
 * 3. 分类数量与搜索匹配结果数量基于实际数组动态计算
 * 4. 具有清晰的空结果提示与一键清除入口
 * 5. 全文内容直接在页内交互展开，不额外产生子路由
 * 6. 严格 0 AFF 入口
 */
export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(HELP_ARTICLES[0].id);

  useEffect(() => {
    document.title = `帮助中心与使用指引 | ${BRAND_NAME} (${BRAND_NAME_EN})`;
    window.scrollTo(0, 0);

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  // 动态统计各分类文章数量
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = { all: HELP_ARTICLES.length };
    HELP_ARTICLES.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    return [
      { id: 'all', name: '全部指引', count: counts.all },
      { id: 'getting-started', name: '新手使用', count: counts['getting-started'] || 0 },
      { id: 'plan-selection', name: '套餐选择', count: counts['plan-selection'] || 0 },
      { id: 'client-setup', name: '客户端', count: counts['client-setup'] || 0 },
      { id: 'multi-device', name: '多设备', count: counts['multi-device'] || 0 },
      { id: 'troubleshooting', name: '常见问题', count: counts['troubleshooting'] || 0 },
    ];
  }, []);

  // 动态纯前端过滤搜索与分类
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return HELP_ARTICLES.filter((article: HelpArticle) => {
      // 分类筛选
      const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchCategory) return false;

      // 文本搜索匹配
      if (!q) return true;
      const inTitle = article.title.toLowerCase().includes(q);
      const inContent = article.content.toLowerCase().includes(q);
      const inTags = article.tags.some((tag) => tag.toLowerCase().includes(q));

      return inTitle || inContent || inTags;
    });
  }, [searchQuery, selectedCategory]);

  const toggleArticle = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

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
            帮助中心
          </span>
        </nav>

        {/* 页面独立 Header 区：唯一 H1 与独立指引简介 */}
        <div className="border border-brand-border bg-brand-surface rounded-2xl p-8 sm:p-10 mb-12 shadow-card text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary border border-brand-border text-xs text-brand-accent font-semibold mb-4 shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            <span>知识库 · 故障排错手册</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-brand-text-heading mb-4">
            {BRAND_NAME}帮助中心与排错手册
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed mb-6">
            系统收录新手快速接入、订阅导入技巧、多设备协同、规则分流配置及常见网络故障的自查指南。所有操作说明均基于客观通用标准设计，辅助您高效排查各类日常网络连接疑难。
          </p>

          {/* 实时纯前端搜索输入框 */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索问题关键词（如：分流规则、DNS、时钟同步、订阅导入...）"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-brand-primary/80 border border-brand-border text-sm text-brand-text-heading placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="清除搜索关键词"
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 分类过滤器胶囊栏（数量动态根据数组计算） */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-brand-border">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>分类筛选：</span>
          </div>
          {categoryStats.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-brand-accent text-black font-bold shadow-sm'
                  : 'bg-brand-surface text-slate-300 hover:text-white hover:bg-brand-primary border border-brand-border'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === cat.id ? 'bg-black/20 text-black' : 'bg-brand-primary text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 搜索状态与结果数量统计 */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-mono">
          <div>
            共匹配到 <span className="text-brand-accent font-bold">{filteredArticles.length}</span> 篇指引说明
            {searchQuery && <span>（包含关键词 “{searchQuery}”）</span>}
          </div>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-brand-accent hover:underline flex items-center gap-1"
            >
              <span>重置所有筛选</span>
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* 文章列表与手风琴展开区 */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-4 mb-16">
            {filteredArticles.map((article) => {
              const isExpanded = expandedArticleId === article.id;
              const buttonId = `help-btn-${article.id}`;
              const panelId = `help-panel-${article.id}`;

              return (
                <div
                  key={article.id}
                  className="rounded-xl bg-brand-surface border border-brand-border overflow-hidden transition-colors hover:border-brand-border-hover shadow-subtle text-left"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => toggleArticle(article.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-brand-text-heading hover:text-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-colors"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
                          {article.categoryName}
                        </span>
                        {article.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="hidden sm:inline text-[10px] text-slate-500 font-mono">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-brand-text-heading">
                        {article.title}
                      </h3>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg bg-brand-primary border border-brand-border flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-brand-accent' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* 展开内容区 */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? 'max-h-[600px] opacity-100 p-5 sm:p-6 pt-0 border-t border-brand-border/40'
                        : 'max-h-0 opacity-0 overflow-hidden p-0'
                    }`}
                  >
                    <div className="pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
                      <p>{article.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* 空结果状态反馈 */
          <div className="p-12 rounded-2xl bg-brand-surface border border-brand-border text-center my-12 shadow-subtle">
            <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-slate-400 mx-auto mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-brand-text-heading mb-2">
              未检索到与 “{searchQuery}” 相关的指引内容
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
              请尝试调整或减少搜索词，或者重置分类筛选查看全部收录的指南文档。
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs transition-colors"
            >
              <span>清空筛选条件</span>
            </button>
          </div>
        )}

        {/* 底部引导栏（纯站内 Link，0 AFF） */}
        <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="text-left">
            <h3 className="text-sm font-bold text-brand-text-heading">
              仍未解决您的问题？
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              您可以前往官方交流频道、查阅常见疑问，或查看客户端下载指引。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/downloads/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/80 border border-brand-border text-slate-200 hover:text-brand-accent text-xs font-semibold transition-all shadow-subtle"
            >
              <span>客户端下载指引</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-black font-semibold text-xs transition-all shadow-subtle"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>联系技术支持</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
