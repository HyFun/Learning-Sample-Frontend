/*
 * @Author       : HyFun
 * @Date         : 2021-01-26 19:25:27
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-26 19:49:23
 */
class Watcher {
  constructor(data, expr, cb) {
    this.data = data;
    this.expr = expr;
    this.cb = cb;
    this.value = this.get();
  }

  get() {
    Dep.target = this;
    const value = this.getValue(this.expr, this.data);
    Dep.target = null;
    return value;
  }

  getValue(expr, data) {
    return expr.split(".").reduce((res, item) => res[item], data);
  }

  update() {
    const value = this.getValue(this.expr, this.data);
    if (value != this.value) {
      // this.value = value;
      typeof this.cb === "function" && this.cb(value);
    }
  }
}
