/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-01 23:32:58
 * @Description  : 手写readonly和shallowReadOnly
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-02 00:06:16
 */
interface Target extends Object{
    [name:string]:any
}

function renderHandler<T extends Target>(): ProxyHandler<T> {
  return {
    get(target: T, prop: PropertyKey) {
      const result = Reflect.get(target, prop)
      console.log(`拦截到了get：${String(prop)}`, result)
      return result
    },
    set(target: T, prop: PropertyKey, value: any) {
      console.warn(`拦截到了设置${String(prop)}:${value}`)
      return true
    },
    deleteProperty(target: T, prop: PropertyKey) {
      console.warn(`拦截到了删除${String(prop)}`)
      return true
    }
  }
}

/**
 * 深度readonly需要递归
 * @param target
 * @returns
 */
export function readonly<T extends Target>(target: any): any {
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      // 对象 需要遍历对象
      Object.keys(target).forEach((v) => {
        target[v] = readonly(target[v])
      })
    }
    return new Proxy(target, renderHandler<T>())
  }
  return target
}

export function shallowReadOnly<T extends Target>(
  target: T
): any {
  if (typeof target === 'object') {
    return new Proxy(target, renderHandler<T>())
  }
  return target
}
