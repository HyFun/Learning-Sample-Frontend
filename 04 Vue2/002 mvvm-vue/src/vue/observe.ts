/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-12 11:09:24
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-12 15:54:56
 */

import { ProtoObject } from '../types/vue'
import Dep from './dep'
import { def } from './util'

export function observe(data: ProtoObject) {
  if (!data || typeof data !== 'object') {
    return
  }
  // 先判断是否是数组
  if (Array.isArray(data)) {
    // 拦截数组的方法
    Object.setPrototypeOf(data, protoArray)
    // 递归遍历数组的每个元素
    data.forEach((v) => {
      observe(v)
    })
  } else {
    // 对象
    Object.keys(data).forEach((key) => {
      defineReactive(data, key, data[key])
      observe(data[key])
    })
  }
}

function defineReactive(target: any, key: any, value: any, enumerable = true) {
  const dep = new Dep()
  Object.defineProperty(target, key, {
    configurable: true,
    enumerable,
    get() {
      // 收集依赖
      Dep.target && dep.depend()
      return value
    },
    set(val) {
      if (val !== value) {
        // 深度拦截新的值
        observe(val)
        value = val
        // 通知更新
        dep.notify()
      }
    }
  })
}

// ---------------------------------------

/**
 * 处理数组相关
 */
const protoArray = Array.prototype
const proxyArray = Object.create(protoArray)
const ARRAY_INTERCEPTOR_METHODS = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

ARRAY_INTERCEPTOR_METHODS.forEach((method) => {
  const origin = proxyArray[method]
  // 代理方法
  def(proxyArray, method, function mutator(...args: any) {
    const result = origin.apply(proxyArray, args)
    // 对更新进来的数据进行拦截
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    observe(inserted)
    return result
  })
})
