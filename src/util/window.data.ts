import SingleClass from '@/util/single.class'
/**
 * window.globalData 全局数据
 */
export class WindowData extends SingleClass {
  /**
* 构造方法
* @return {any}
*/
  static ins(): WindowData {
    return super.ins() as WindowData
  }
  /**
   * 从window.globalData[name]获取值
   * @param {string} name
   * @param {string} value
   * @return {any}
   */
  public getItem(name: string) {
    return globalData[name] || ''
  }

  /**
   * 设置window.globalData[name]
   * @param {string} name
   * @param {string} value
   */
  public setItem(name: string, value: any) {
    globalData[name] = value
  }

  /**
   * 从window.globalData[name]删除值
   * @param {string} name
   */
  public removeItem(name: string) {
    delete globalData[name]
  }
}
