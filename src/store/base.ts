import { defineStore } from 'pinia'
export interface IBaseState {
  site_id: number,
  screen: ScreenType,
  domain: string,
  path: string,
  pageLoad: boolean,
}
export const BaseStore = defineStore('base', {
  state: (): IBaseState => {
    return {
      path: '',
      site_id: 0,
      screen: 'xl',
      domain: '',
      pageLoad: false,
    }
  },
  getters: {
    iframeSrc: (state: IBaseState) => {
      return 'iFrame'
    },
  },
  actions: {
    setScreen(screen: ScreenType) {
      this.screen = screen
    },
    setPath(path: string) {
      this.path = path
    },
    setDomain(domain: string) {
      this.domain = domain
    },
    setPageLoad(pageLoad: boolean) {
      this.pageLoad = pageLoad
    }
  },
})

export const baseStore = BaseStore()

