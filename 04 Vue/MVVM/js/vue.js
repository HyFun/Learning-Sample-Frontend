/*
 * @Author       : HyFun
 * @Date         : 2021-01-25 09:55:04
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-26 18:37:55
 */
class Vue {
  constructor(options) {
    this._el = options.el;
    this._data = options.data;

    new Observe(this._data);
    new Compiler(this._el, this);
    if (this._data) {
      // 挂载data
      this.proxyData();
    }
  }

  proxyData() {
    Object.keys(this._data).forEach((key) => {
      this.proxy(this, "_data", key);
    });
  }

  // --------辅助方法-------
  /**
   * 将target中的prop属性的内容，挂载到target上
   * @param {*} target
   * @param {*} prop
   * @param {*} key
   */
  proxy(target, prop, key) {
    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return target[prop][key];
      },
      set(val) {
        target[prop][key] = val;
      },
    });
  }
}
