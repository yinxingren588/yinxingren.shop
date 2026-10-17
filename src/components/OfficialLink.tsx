import React from 'react';
import { OFFICIAL_URL } from '@/config/site';

export interface OfficialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
}

/**
 * OfficialLink 组件
 * 规则要求：
 * 1. 所有实际跳转 AFF 的入口统一通过 OfficialLink 组件输出。
 * 2. 完整保留 Hash、Query 和推广参数，不得转码、截断、拼接额外参数或改写。
 * 3. 强制使用 target="_blank" 和 rel="sponsored noopener noreferrer"。
 * 4. OfficialLink 仅为内部代码组件命名，不代表对目标网站官方身份的法律认证。
 */
export const OfficialLink: React.FC<OfficialLinkProps> = ({
  children,
  className = '',
  href = OFFICIAL_URL,
  ...props
}) => {
  // 确保使用完整且未经篡改的 AFF 地址
  const targetHref = href || OFFICIAL_URL;

  return (
    <a
      href={targetHref}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};

export default OfficialLink;
