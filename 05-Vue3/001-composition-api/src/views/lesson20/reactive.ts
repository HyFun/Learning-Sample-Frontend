/*
 * @Author       : heyongfeng
 * @Date         : 2021-06-28 23:16:39
 * @Description  : 手写实现reactive和shallowReactive
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-28 23:34:17
 */

function handler():ProxyHandler<any> {
  return {
    get(target, prop) {
      console.log(`proxy->get`, prop)
      return Reflect.get(target, prop)
    },
    set(target, prop, val) {
      console.log(`proxy->set`, prop, val)
      return Reflect.set(target, prop, val)
    },
    deleteProperty(target, prop) {
      console.log(`proxy->delete`, prop)
      return Reflect.deleteProperty(target, prop)
    }
  }
}

export function shallowReactive(target: any):any {
  if (target && typeof target === 'object') {
    return new Proxy(target, handler())
  }
  return target
}

export function reactive(target:any) {
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      for (let i = 0; i < target.length; i++) {
        target[i] = reactive(target[i])
      }
    } else {
      Object.keys(target).forEach(v => {
        target[v] = reactive(target[v])
      })
    }
    return new Proxy(target, handler())
  }
  return target
}
