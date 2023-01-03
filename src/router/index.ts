import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { useTitle } from '@vueuse/core'
import { IRouter } from '@/util/menu.service'
import { articleRouter } from './article.router'
const baseRouter: IRouter[] = [
  { id: 1, pid: 0, path: '/', icon: '', name: '/', redirect: '/admin', hidden: true, },
  {
    id: 2, pid: 0, icon: '', path: '/admin', name: 'admin', layout: 'default', hidden: true,
    meta: { title: '首页', sidebarMap: ['admin'], breadcrumbs: ['首页'], },
    component: () => import('../views/home/home.vue'),
  },
]
export let routeList = [
  ...baseRouter,
  ...articleRouter,
  {
    id: 1000, pid: 0, name: '404', icon: '', layout: 'blank', hidden: true, path: '/:catchAll(.*)',
    meta: { title: '工作台', sidebarMap: ['admin'], breadcrumbs: ['控制台'], },
    component: () => import('../views/404.vue'),
  },
]
/**
 * 描述
 * @date 2022-01-06
 * @param {any} route
 * @param {any} parentLayout="blank"
 * @return {any}
 */
function addLayoutToRoute(route: any, parentLayout = 'default') {
  route.meta = route.meta || {}
  route.meta.layout = route.layout || parentLayout

  if (route.children) {
    route.children = route.children.map((childRoute: any) =>
      addLayoutToRoute(childRoute, route.meta.layout)
    )
  }
  return route
}

routeList = routeList.map((route) => addLayoutToRoute(route))

const routes: any = routeList

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    }
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

router.beforeEach((to, _from) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  const title = useTitle()
  title.value = (to.meta.title as string) || 'zhubird'
})

router.afterEach((_to, _from) => {
  NProgress.done()
})

export default router
