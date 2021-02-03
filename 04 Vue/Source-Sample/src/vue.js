/*
 * @Author       : HyFun
 * @Date         : 2021-01-27 14:39:36
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-01 17:47:09
 */
import { observe } from "./observer";
import { getVNode,combine,parseVNode } from './util/compiler'
import Watcher from './watcher'

class Vue {
  constructor(options) {
    this._el =
      options.el.nodeType === 1
        ? options.el
        : document.querySelector(options.el);
    this._elParent = this._el.parentNode
    if (options.data) {
      this._data = options.data;
      observe(this._data);
      // 挂在数据到vm实例上
      Object.keys(this._data).forEach((key) => {
        proxy(this, "_data", key);
      });
      // 
      this.mount()
    }
  }


  mount() {
    // 提供一个render方法
    // dom -> ast -> vnode -> dom
    this.render = this.createRenderFn()

    // 渲染视图
    this.mountComponent()
  }

  mountComponent() {
    const mount = () => {
      this.update(this.render())
    }
    new Watcher(this,mount)
  }

  createRenderFn() {
    // 将真实 dom -> ast 语法树
    const ast = getVNode(this._el)
    return function() {
      // 将 ast 语法树 -> vnode
      const vnode = combine(ast, this._data)
      return vnode
    }
  }

  update(vnode) {
    // 将虚拟dom转换为 真实 dom
    const element = parseVNode(vnode)
    this._elParent.replaceChild(element, document.querySelector('#app'))
  }
}

function proxy(target, prop, key) {
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable: true,
    get() {
      return target[prop][key];
    },
    set(value) {
      target[prop][key] = value;
    },
  });
}

export default Vue;
