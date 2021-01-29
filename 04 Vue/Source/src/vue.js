/*
 * @Author       : HyFun
 * @Date         : 2021-01-27 14:39:36
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-29 18:25:18
 */
import { observe } from "./observer";

class Vue {
  constructor(options) {
    this._el =
      options.el.nodeType === 1
        ? options.el
        : document.querySelector(options.el);
    if (options.data) {
      this._data = options.data;
      observe(this._data);
      // 挂在数据到vm实例上
      Object.keys(this._data).forEach((key) => {
        proxy(this, "_data", key);
      });
    }
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
