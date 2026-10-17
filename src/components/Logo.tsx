import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * 品牌 Logo 组件
 * 规则要求：
 * 1. Logo 只能返回首页 '/'，绝不跳转 AFF。
 * 2. 视觉母题：幽夜潜行与精准翡翠信标（极简潜行棱镜折角 + 翡翠绿信标）。
 */
export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg p-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${BRAND_NAME} 首页`}
    >
      {/* 品牌官方 Logo 图标 */}
      <div className="relative w-9 h-9 rounded-lg bg-white border border-brand-border flex items-center justify-center shadow-subtle group-hover:border-brand-accent transition-all overflow-hidden flex-shrink-0">
        <img
          src="/logo.jpg"
          alt={`${BRAND_NAME} 标志`}
          className="w-full h-full object-cover rounded-lg"
          width={36}
          height={36}
          loading="eager"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-base font-bold tracking-tight text-brand-text-heading flex items-center gap-2 leading-none">
          {BRAND_NAME}
          <span className="text-[10px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded bg-brand-primary border border-brand-border text-brand-accent font-semibold">
            {BRAND_NAME_EN}
          </span>
        </span>
        {showSubtitle && (
          <span className="text-[11px] text-brand-text-muted mt-1 leading-none">
            第三方连接指引
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
