import { IRouter, MenuService } from '@/util/menu.service'

const menu = MenuService.ins().getRoute
export const articleRouter: IRouter[] = [
  {
    ...menu({ id: 6, pid: 0, path: 'article', title: '文章管理' }),
    component: () => import('../views/test.vue'),
  },
  {
    ...menu({ id: 61, pid: 6, path: 'article', title: '文章列表' }),
    component: () => import('../views/test.vue'),
  },
]
