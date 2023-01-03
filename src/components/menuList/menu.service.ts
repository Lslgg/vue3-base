import { ref } from 'vue'

/**
 * 栏目管理
 */
export class MenuSiderService {
  /**
   * useMenuSider
   * @return {any}
   */
  public useMenuSider() {
    const selectedKeys = ref(['home'])
    const openKeys = ref<string[]>([''])
    const treeMenus = this.getTreeMenus()
    return {
      selectedKeys,
      openKeys,
      treeMenus,
    }
  }

  /**
   * 描述
   * @date 2022-06-14
   * @return {any}
   */
  getTreeMenus() {
    const menuList: ITree[] = [
      { id: 1, pid: 0, title: '测试', name: 'text', path: 'test' },
      { id: 2, pid: 1, title: '测试1', name: 'text', path: 'test1' },
      { id: 3, pid: 1, title: '测试2', name: 'text', path: 'test2' },
      { id: 4, pid: 0, title: '其它', name: 'text', path: 'test3' },
    ]
    let treeMenus: ITree[] = []
    // 获取一级栏目
    treeMenus = menuList.filter(p => p.pid === 0)
    treeMenus.forEach(p => {
      // 获取二级栏目
      const ppMenu = menuList.filter(pp => pp.pid === p.id)
      if (ppMenu.length > 0) p.children = ppMenu
      // 获取三级栏目
      ppMenu.forEach(pp => {
        const pppMenu = menuList.filter(ppp => ppp.pid === pp.id)
        if (pppMenu.length > 0) pp.children = pppMenu
      })
    })
    return treeMenus
  }
}
