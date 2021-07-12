import Dep from './dep'

/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 17:16:39
 * @Description  : 依赖收集
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 18:49:56
 */
export default class Observe {
  $data
  constructor(data) {
    this.$data = data

    if (typeof this.$data === 'object') {
      this.observe(this.$data)
    }
  }

  observe(data) {
    // 判断是否是数据
    if (Array.isArray(data)) {
      // 拦截数组方法
      data.forEach((v) => {
        // 继续递归
        this.observe(v)
      })
    } else if (typeof data === 'object') {
      Object.keys(data).forEach((v) => {
        this.defineReactive(data, v, data[v])
        this.observe(data[v])
      })
    }
  }

  defineReactive(target, key, value) {
    const dep = new Dep()
    Object.defineProperty(target, key, {
      configurable: false,
      enumerable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set(val) {
        // 更新
        if (value !== val) {
          value = val
          // 数据更新完成后才通知更新
          dep.notify()
        }
      }
    })
  }
}
