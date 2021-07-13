/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-03 00:58:34
 * @Description  : 手写ref和shallowRef
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-03 01:09:12
 */
const createHandler = () => {
  return {
    get(target: any, prop:string) {
      return Reflect.get(target, prop)
    },
    set(target:any, prop:string, val:any) {
      return Reflect.set(target, prop, val)
    },
    deleteProperty(target:any, prop:string) {
      return Reflect.deleteProperty(target, prop)
    }
  }
}

function reactive(target:any):any {
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach(v => {
        target[v] = reactive(target[v])
      })
    } else {
      Object.keys(target).forEach(v => {
        target[v] = reactive(target[v])
      })
    }
    return new Proxy(target, createHandler())
  }
  return target
}

export function shallowRef(target:any):any {
  return {
    _value: target,
    get value() {
      console.log(`shallowRef:::get`, this._value)
      return this._value
    },
    set value(val) {
      console.log(`shallowRef:::set`, val)
      this._value = val
    }
  }
}

export function ref(target:any):any {
  target = reactive(target)
  return {
    _value: target,
    get value() {
      console.log(`ref:::get`, this._value)
      return this._value
    },
    set value(val) {
      console.log(`ref:::set`, val)
      this._value = val
    }
  }
}
