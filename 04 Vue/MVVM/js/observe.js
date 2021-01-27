/*
 * @Author       : HyFun
 * @Date         : 2021-01-26 18:28:53
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-27 11:30:33
 */
class Observe {
  constructor(data) {
    this.data = data;
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
    const dep = new Dep()
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return value;
      },
      set(newVal) {
        if (newVal != value) {
          value = newVal;
          dep.notify()
        }
      },
    });
  }
}
