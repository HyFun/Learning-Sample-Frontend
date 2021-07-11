/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 18:39:59
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 18:48:48
 */

export default class Dep {
  constructor() {
    this.list = []
  }

  addSub(watcher) {
    if (watcher) {
      this.list.push(watcher)
    }
  }

  notify() {
    this.list.forEach((watcher) => {
      watcher.update()
    })
  }
}
