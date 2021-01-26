/*
 * @Author       : HyFun
 * @Date         : 2021-01-26 18:28:53
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-26 19:40:45
 */
class Observe {
  constructor(data) {
    this.data = data;
    this.dep = new Dep()
    if (typeof this.data === "object") {
      this.observe(this.data);
    }
  }

  observe(data) {
    if (!data || typeof data != "object") return;
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key]);
      this.observe(data[key]);
    });
  }

  defineReactive(target, key, value) {
    const that = this
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get() {
        Dep.target && that.dep.addSub(Dep.target)
        return value;
      },
      set(newVal) {
        if (newVal != value) {
          value = newVal;
          that.dep.notify()
        }
      },
    });
  }
}
