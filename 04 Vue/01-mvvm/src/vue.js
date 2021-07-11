/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 16:50:37
 * @Description  : vue
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 17:29:36
 */
import Compiler from './compiler'
import Observe from './observe'

export default class Vue {
  $el
  $data

  constructor(options) {
    const { el, data } = options
    this.$el = typeof el === 'string' ? document.querySelector(el) : el
    this.$data = typeof data === 'function' ? data() : data

    // 依赖收集
    new Observe(this.$data)
    // 模板编译
    new Compiler(this.$el, this.$data)

    // 将数据挂在到实例上 实际上调用的是data数据
    this.proxyData()
  }

  proxyData() {
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
}
