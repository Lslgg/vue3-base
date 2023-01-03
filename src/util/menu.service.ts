import { routeList } from '@/router'
import SingletonClass from './single.class'

export interface IRouter {
  id: number
  path: string
  name: string
  layout?: string
  icon: string
  pid: number
  hidden: boolean
  redirect?: any
  meta?: IMeta
  component?: () => Promise<typeof import('*.vue')>
}

export interface IMeta {
  title: string
  sidebarMap?: string[]
  breadcrumbs?: string[]
}

export interface IMenu {
  id: number
  name: string
  title: string
  key: string
  url: string
  icon: string
  pid: number
  hidden?: boolean
  subMenu?: IMenu[]
}

export interface IMenuParams {
  id: number
  pid?: number
  path: string
  title: string
  icon?: string
  hidden?: boolean
  name?: string
  layout?: 'blank' | 'default'
  prefix?: string
}

/** MenuUtilts */
export class MenuService extends SingletonClass {
  /**
   * 构造方法
   * @return {any}
   */
  static ins(): MenuService {
    return super.ins() as MenuService
  }

  /**
   * 生成路由
   * @date 2022-03-15
   * @param {any} params:number
   * @return {any}
   */
  getRoute(params: IMenuParams) {
    params.id = params.id || 0
    params.pid = params.pid || 0
    params.icon = params.icon || ''
    params.hidden = params.hidden || false
    params.name = params.name || ''
    params.layout = params.layout || 'default'
    params.prefix = params.prefix || 'mobile'
    const meta = {
      title: params.title, sidebarMap: ['mobile', params.path],
      breadcrumbs: ['首页', params.title], pid: params.pid, id: params.id
    }
    const pathList = params.path.split('/')
    if (!params.name) {
      if (pathList.length >= 2) params.name = pathList[pathList.length - 1]
      else if (pathList.length === 1) params.name = pathList[0]
    }
    return {
      id: params.id,
      path: `/${params.prefix}/${params.path}`,
      name: params.name,
      layout: params.layout,
      icon: params.icon,
      pid: params.pid,
      hidden: params.hidden,
      meta
    }
  }

  /**
   * 获取菜单项
   */
  get menuList(): IMenu[] {
    let menuList: IMenu[] = []
    menuList =
      routeList
        .filter((p) => p.pid === 0 && !p.hidden)
        ?.map((p) => this.getMenuInfo(p)) ?? []
    menuList.forEach((p) => {
      p.subMenu =
        routeList
          .filter((pp) => pp.pid === p.id && !pp.hidden)
          ?.map((p) => this.getMenuInfo(p)) ?? []
    })
    return menuList
  }

  /**
   * 路由转换成菜单项
   * @param {IRouter} p
   * @return {any}
   */
  private getMenuInfo(p: IRouter) {
    return {
      id: p.id,
      name: p.name,
      title: p.meta?.title ?? p.name,
      key: p.name,
      url: p.path,
      icon: p.icon,
      pid: p.pid,
      subMenu: [],
    }
  }
}
