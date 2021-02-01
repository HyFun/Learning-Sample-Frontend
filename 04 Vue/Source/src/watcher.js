/*
 * @Author       : HyFun
 * @Date         : 2021-02-01 17:35:30
 * @Description  : watcher
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-01 17:56:02
 */
import Dep from "./dep";

let watcherId = 0;

class Watcher {
  constructor(vm, exprOrFn) {
    this.id = watcherId++;

    this.vm = vm;
    this.getter = exprOrFn;

    this.deps = [];
    this.depIds = {};

    this.get();
  }

  get() {
    Dep.target = this;
    this.getter.call(this.vm);
    Dep.target = null;
  }

  run() {
    this.get();
  }

  update() {
    this.run();
  }

  addDep(dep) {
    this.deps.push(dep);
  }
}

export default Watcher;
