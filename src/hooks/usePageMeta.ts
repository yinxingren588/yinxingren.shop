import { useEffect } from 'react';
import { BRAND_NAME } from '@/config/site';

/**
 * 临时未开发页面的 noindex 标记与标题管理
 * 规则：尚未开发的页面可以暂时使用简洁占位组件，并标记为临时 noindex；正式内容完成后再移除对应临时设置。
 */
export function usePlaceholderMeta(title: string, isTemporary: boolean = true) {
  useEffect(() => {
    document.title = `${title} | ${BRAND_NAME}`;

    let metaTag: HTMLMetaElement | null = null;
    if (isTemporary) {
      metaTag = document.querySelector('meta[name="robots"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = 'robots';
        document.head.appendChild(metaTag);
      }
      metaTag.content = 'noindex, nofollow';
    }

    return () => {
      if (metaTag && isTemporary) {
        metaTag.content = 'index, follow';
      }
    };
  }, [title, isTemporary]);
}
