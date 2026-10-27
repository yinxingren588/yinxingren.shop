import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { BRAND_NAME, BRAND_NAME_EN, AFF_DISCLOSURE_TEXT } from '@/config/site';

/**
 * 真实四栏页脚组件
 * 规则要求：
 * 1. 栏目一：品牌介绍（准确说明本站第三方身份与定位）
 * 2. 栏目二：产品与服务
 * 3. 栏目三：支持与帮助
 * 4. 栏目四：法律政策
 * 5. 页脚全部使用站内链接（Link），AFF 数量严格为 0。
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 text-slate-400 relative overflow-hidden backdrop-blur-md">
      {/* 顶部科技感微弱渐变分隔线 */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* 第1栏：品牌介绍与身份说明 */}
          <div className="space-y-4">
            <Logo showSubtitle={false} />
            <p className="text-xs text-slate-400 leading-relaxed">
              {BRAND_NAME}（{BRAND_NAME_EN}）专注于提供客观的跨境网络连接服务指引与实用配置教程。
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 leading-relaxed shadow-sm">
              <span className="font-semibold text-brand-text-heading">身份声明：</span>
              本站为第三方信息展示与使用指引导航站点，非官方自营或授权直营平台。
            </div>
          </div>

          {/* 第2栏：产品与服务 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text-heading mb-4">
              产品与服务
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/services/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  服务介绍
                </Link>
              </li>
              <li>
                <Link
                  to="/advantages/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  核心优势
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  服务范围
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  客户端下载
                </Link>
              </li>
            </ul>
          </div>

          {/* 第3栏：支持与帮助 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text-heading mb-4">
              支持与帮助
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/pricing/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  订阅套餐
                </Link>
              </li>
              <li>
                <Link
                  to="/help/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  帮助中心
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  联系支持
                </Link>
              </li>
            </ul>
          </div>

          {/* 第4栏：法律政策 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text-heading mb-4">
              法律政策
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/terms/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  服务条款与免责
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy/"
                  className="hover:text-brand-accent transition-colors focus:outline-none focus:underline"
                >
                  隐私政策说明
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-500 leading-normal">
              使用本站服务即代表您已知悉并同意遵守相关法律法规及服务条款。
            </p>
          </div>
        </div>

        {/* 底部版权与推广佣金披露栏（全部为普通文字和站内纯链接，AFF=0） */}
        <div className="mt-12 pt-8 border-t border-brand-border text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            {AFF_DISCLOSURE_TEXT}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
            <p>© {currentYear} {BRAND_NAME}. 版权所有。第三方信息导航站点。</p>
            <div className="flex items-center gap-4 text-slate-400">
              <Link to="/terms/" className="hover:text-brand-accent transition-colors">条款</Link>
              <span>·</span>
              <Link to="/privacy/" className="hover:text-brand-accent transition-colors">隐私</Link>
              <span>·</span>
              <Link to="/contact/" className="hover:text-brand-accent transition-colors">支持</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
