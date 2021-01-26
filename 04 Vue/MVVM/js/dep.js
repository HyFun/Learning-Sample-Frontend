/*
 * @Author       : HyFun
 * @Date         : 2021-01-26 19:22:14
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-26 19:24:01
 */
class Dep {
  constructor() {
    this.list = [];
  }

  addSub(watcher) {
    if (watcher) {
      this.list.push(watcher);
    }
  }

  notify() {
    this.list.forEach((watcher) => {
      watcher.update();
    });
  }
}
