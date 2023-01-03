/* eslint-disable no-unused-vars */
/** 分页ui下一页参数类型 */
declare type PagType = {
  current: number
  pageSize: number
  total: number
}
/**
 * 返回结果
 */
declare interface Result<T> {
  code: number
  message: string
  timestamp: string
  data: T
}
/** 分页查找参数 */
declare interface PagingParams<T> {
  pageIndex: number
  pageSize: number
  where?: T
}
/** 使用分页结果 */
declare interface UsePaging<T> {
  total: number
  pageIndex: number
  pageSize: number
  list?: T[]
  data?: T[]
}
declare interface ImportMetaEnv {
  VITE_API_DOMAIN: string
  readonly VITE_MODE_NAME: string
  readonly VITE_BASE_URL: string
  readonly VITE_WEB_HOST: string
  readonly VITE_PORT: number
}
declare interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare interface SDK {
  request<T>(info: { url: string, method: string, params: any, mock?: boolean }): Promise<Result<T>>
  /** 登录 */
  login(info: { account: string, password: string, keep: boolean })
  /** 登出 */
  logout()
  /** 初始化 */
  init(): Promise<any>
  /** 上传 */
  upload<T>({ file: any, site_id: number, group_id = 0 }): Promise<T>
  /** 重定向地址 */
  redirect_url: string
}
declare const globalSdk: SDK
declare const tinymce: any
declare const globalData: {
  [index: string]: any
}
/**
 * 分页返回原结果
 */
declare interface ResPagingData<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string
  path: string
  per_page: number
  prev_page_url: string
  to: number
  total: number
}
declare interface ITree {
  id: number | string
  pid: number | string
  title: string
  name?: string
  path?: string
  children?: ITree[]
  level?: number
  status?: number
  disabled?: Boolean
}
declare type KeyValue = { key: number | string, value: string }
declare type PagingFun = (payload: any, filters?: {}, sorter?: {}) => void
/** 分类类别 */
declare type ScreenType = 'xl' | 'md' | 'default'

declare const diplomats = []
declare const receives = {}
// eslint-disable-next-line require-jsdoc
declare class Diplomat {
  constructor($iframe: any): void
  post(name: string, params: any): Promise<any>
  receive(name: string, callback: any): void
}

declare type PostType =
  'setElement' | 'addElement'
  | 'delElement' | 'getSiteInfo'
  | 'getPageInfo' | 'getSetting'
  | 'getBlocks' | 'findElement'
declare type ShowSiderType = 'menuList' | 'packageList' | 'settingItem'
