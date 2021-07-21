/*
 * @Author       : HyFun
 * @Date         : 2021-07-21 16:44:02
 * @Description  : 对象扁平化和还原
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-21 17:34:07
 */
var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

/**
 * 1. 对象扁平化
 */
function flat(obj, pre = '', result = {}) {
  Object.keys(obj).forEach((v) => {
    const key = `${preKey}${v}`
    if (typeof obj[v] === 'object') {
      flat(obj[v], `${key}.`, result)
    } else {
      result[key] = obj[v]
    }
  })
  return result
}

const flatResult = flat(entry, '', {})
console.log(flatResult)

/**
 * 2. 扁平化对象重组
 */
function restore(obj) {
  let result = {}

  Object.keys(obj).forEach((v) => {
    const list = v.split('.')
    const value = obj[v]
    list.reduce((res, item, index) => {
      if (index === list.length - 1) {
        res[item] = value
      } else {
        res[item] = res[item] ? res[item] : {}
      }
      return res[item]
    }, result)
  })
  return result
}

console.log(JSON.stringify(restore(flatResult), null, 4))
