import router from '@/router'
import SingletonClass from '@/util/single.class'
import { useScroll } from '@vueuse/core'
import { ref, toRefs, watch } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { Utilts } from './utilts'
/**
 * 描述
 * @date 2022-03-17
 */
export class UseCommon extends SingletonClass {
  /**
   * 构造方法
   * @return {any}
   */
  static ins(): UseCommon {
    return super.ins() as UseCommon
  }
  /**
   * 站点id
   * @date 2022-03-26
   * @return {any}
   */
  get siteId(): any {
    const id = 1
    if (id) return id
    else undefined
  }
  /**
   * 跳转url
   * @date 2022-03-21
   * @param {any} name:string
   * @param {any} params
   */
  goUrlName(name: string, params: any = {}) {
    router.push({ name, params })
  }
  /**
   * 退出登录
   * @date 2022-04-07
   */
  logOut() {
    globalSdk
      .logout()
      .then(() => {
        location.href = '/admin/login'
      })
      .catch((res: any) => {
        Utilts.ins().message(res.messages, 'error')
      })
  }

  /**
   * 获取路由id
   * @date 2022-04-08
   * @return {any}
   */
  get pageId() {
    const route = useRoute()
    const id = +(route.params.id ?? '0')
    return id
  }
  /**
   * 滚动分页
   * @date 2022-03-17
   * @param {any} getPatationList:string
   * @return {any}
   */
  public useOnScroll(getPatationList: any) {
    const scrollRef = ref<HTMLElement | null>(null)
    const { arrivedState } = useScroll(scrollRef)
    const { bottom } = toRefs(arrivedState)
    const isComplete = ref(false)
    let sortTimeout = 0
    // 滚动到最下面时请求数据
    watch(bottom, (val: boolean) => {
      if (val && getPatationList) {
        if (sortTimeout) clearTimeout(sortTimeout)
        sortTimeout = setTimeout(() => getPatationList(), 0)
      }
    })
    return {
      scrollRef,
      isComplete
    }
  }

  /**
   * 描述
   * @date 2022-05-27
   * @param {any} isTrue:any
   */
  public routeLeaveTip(isTrue: boolean) {
    const content = '您是否确认离开此页面-您输入的数据可能不会被保存'
    onBeforeRouteLeave((to, from, next) => {
      if (!isTrue) {
        Utilts.ins().confirm({
          content: content,
          okCallBack: () => next(),
          cancelCallBack: () => next(false)
        })
      } else next()
    })
    window.onbeforeunload = (e: any) => content
    window.onunload = (e: any) => content
  }

  /**
   * 根据路由获取域名和路径
   * @date 2022-06-16
   * @return {any}
   */
  public getDomainAndPath() {
    const url = Utilts.ins().getUrlParams('url')
    if (!url) return { url: '', domain: '', path: '' }
    // 正则获取网址域名部分
    let domain = ''
    let path = ''
    const fun: any = (match: string, p1: string, p2: string) => {
      domain = p1
      path = p2 || '/'
    }
    url.replace(/^(?:(?:http:|https:)?\/\/)?([^\/]*)(.*)/, fun)
    return { url, domain, path }
  }
}
