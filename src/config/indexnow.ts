import { SITE_URL } from './site';
import indexnowData from './indexnow.json';

/**
 * IndexNow 搜索引擎主动推送协议配置
 * 
 * 规范要求：
 * 1. 采用持久化生成的 32 位十六进制随机 API Key，禁止每次重新生成
 * 2. 验证文件位于站点根目录 /${INDEXNOW_KEY_FILE}
 * 3. 部署后应能通过 ${INDEXNOW_KEY_LOCATION} 直接 HTTPS 访问返回 HTTP 200
 * 4. 仅作为发现与更新通知机制，不属于强制收录或提权保证
 */
export const INDEXNOW_KEY = indexnowData.key;
export const INDEXNOW_KEY_FILE = indexnowData.keyFile;
export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY_FILE}`;
export const INDEXNOW_HOST = new URL(SITE_URL).host;
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
