import Dep from './dep'
import Vue from './vue'

/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 15:37:26
 * @Description  : Watcher
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 15:42:39
 */
let watcherId = 0

export default class Watcher {
  vm: Vue
  id: number
  getter: Function
  deps: Array<Dep>
  constructor(vm: Vue, exprOrFn: Function) {
    this.id = watcherId++
    this.vm = vm
    this.deps = []

    this.getter = exprOrFn

    this.get()
  }
  get() {
    Dep.target = this
    this.getter.call(this.vm)
    Dep.target = null
  }

  run() {
    this.get()
  }

  update() {
    this.run()
  }

  addDep(dep: Dep) {
    if (dep && !this.deps.some((v) => v.depId == dep.depId)) {
      this.deps.push(dep)
    }
  }
}
