import { blockStore } from '@/store/block'
import { computed } from 'vue'
import SingletonClass from './single.class'
/** UseStore */
export class StoreService extends SingletonClass {
  /**
  * 构造方法
  * @return {any}
  */
  static ins(): StoreService {
    return super.ins() as StoreService
  }

  /**
   * 当前选中的模块
   * @date 2022-06-21
   * @return {any}
   */
  get selfPackage() {
    return computed(() => blockStore.selfPackage)
  }

  /**
   * 根据id设置当前选中的模块,并返回
   * @date 2022-06-22
   * @param {any} id:string
   * @return {any}
   */
  getSelfPackageById(id: string) {
    const currenPackage = blockStore.packageList[id]
    blockStore.selectBlock(currenPackage)
    return currenPackage
  }

  /**
   * 设置当前选中状态
   * @date 2022-06-22
   * @param {any} active:boolean
   */
  setPackageListActive(active = false) {
    for (const key in blockStore.packageList) {
      if (Object.prototype.hasOwnProperty.call(blockStore.packageList, key)) {
        const element = blockStore.packageList[key]
        element.designData.active = active
      }
    }
  }

  /**
   * 设置父类open
   * @date 2022-06-22
   * @param {any} pid
   * @param {any} open
   */
  setPackageParentOpen(pid: string, open = true) {
    for (const key in blockStore.packageList) {
      if (Object.prototype.hasOwnProperty.call(blockStore.packageList, key)) {
        const element = blockStore.packageList[key]
        if (element.id === pid) {
          if (element.designData.open) element.designData.open = false
          element.designData.open = true
          this.setPackageParentOpen(element.data.parent_id, open)
        }
      }
    }
  }

  /**
   * 设置所有的模块的open状态
   * @param {boolean} isOpen
   * @date 2022-06-22
   */
  setPackageListOpen(isOpen = true) {
    for (const key in blockStore.packageList) {
      if (Object.prototype.hasOwnProperty.call(blockStore.packageList, key)) {
        const item = blockStore.packageList[key]
        item.designData.open = isOpen
        // 不能和open使用同一个，会有问题，显示展开图标
        item.designData.iconOpen = isOpen
      }
    }
  }
}
