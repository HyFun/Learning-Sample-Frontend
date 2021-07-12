/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-11 18:37:35
 * @Description  : watcher
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-11 18:43:28
 */

import Dep from './dep'
import { getValue } from './util'

export default class Watcher {
  constructor(data, express, callback) {
    this.$data = data
    this.$express = express
    this.$callback = callback

    this.value = this.get()
  }
  get() {
    Dep.target = this
    const value = getValue(this.$express, this.$data)
    Dep.target = null
    return value
  }

  update() {
    // 判断新值是否和旧值不一样
    const newVal = getValue(this.$express, this.$data)
    if (this.value !== newVal && typeof this.$callback === 'function') {
      this.$callback(newVal)
    }
  }
}
