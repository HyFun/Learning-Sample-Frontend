/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 15:42:19
 * @Description  : Dep
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 15:52:55
 */

import Watcher from './watcher'

let depId = 0
export default class Dep {
  static target: undefined | Watcher | null = undefined
  list: Array<Watcher> = []
  depId: number
  constructor() {
    this.depId = depId++
  }

  /**
   * 添加依赖
   */
  depend() {
    if (Dep.target && !this.list.some((v) => v.id === Dep.target?.id)) {
      this.list.push(Dep.target)
      Dep.target.addDep(this)
    }
  }

  /**
   * 通知更新
   */
  notify() {
    this.list.forEach((v) => {
      v.update()
    })
  }
}
