/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 10:46:27
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 15:57:12
 */

import { VueOptions } from '../types/vue'
import { observe } from './observe'
import { getAST, getVNode, parseVNode } from './compiler'
import VNode from './vnode'
import Watcher from './watcher'

export default class Vue {
  $el: Element
  $elParent: Node & ParentNode
  $data: object
  render!: Function
  constructor(options: VueOptions) {
    // el
    this.$el =
      typeof options.el === 'string'
        ? document.querySelector(options.el)!
        : options.el
    this.$elParent = this.$el.parentNode!
    // data
    this.$data = options.data.call(this)

    // 将data数据代理到实例上
    this.proxyData()

    // 数据拦截
    observe(this.$data)

    // 挂载数据
    this.mount()
  }

  proxyData(): void {
    Object.keys(this.$data).forEach((v) => {
      Object.defineProperty(this, v, {
        configurable: true,
        enumerable: true,
        get() {
          return this.$data[v]
        },
        set(val) {
          this.$data[v] = val
        }
      })
    })
  }

  mount() {
    // dom -> ast -> vnode
    this.render = this.createRender()
    // 渲染视图
    this.mountComponent()
  }

  createRender(): Function {
    const that = this
    // dom -> ast
    const ast = getAST(this.$el)
    return function () {
      // ast -> vnode
      const vnode = getVNode(ast, that.$data)
      return vnode
    }
  }

  mountComponent() {
    const mount = () => {
      this.update(this.render())
    }
    new Watcher(this, mount)
  }

  update(vnode: VNode): void {
    // vnode -> dom
    const element = parseVNode(vnode, this.$data)
    this.$elParent.replaceChild(
      element as Node,
      document.querySelector('#app')!
    )
  }
}
