/*
 * @Author       : HyFun
 * @Date         : 2021-01-29 17:48:52
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-01 17:54:44
 */

let depId = 0;
class Dep {
  constructor() {
    this.id = depId++;
    this.watchers = [];
  }

  removeWatcher(watcher) {
    for (let i = this.watchers.length - 1; i >= 0; i--) {
      if (watcher === this.watchers[i]) {
        this.watchers.splice(i, 1);
      }
    }
  }

  depend() {
    if (Dep.target) {
      this.watchers.push(Dep.target);
      Dep.target.addDep(this);
    }
  }

  notify() {
      this.watchers.forEach(watcher=>{
          watcher.update()
      })
  }
}

export default Dep;
