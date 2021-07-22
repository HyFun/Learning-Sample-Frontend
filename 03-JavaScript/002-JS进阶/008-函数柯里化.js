/*
 * @Author       : HyFun
 * @Date         : 2021-07-21 18:06:45
 * @Description  : 函数柯里化
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-21 18:18:48
 */

function add(a, b, c, d) {
  return a + b + c + d
}

function currying(fn) {
  const length = fn.length
  let index = 0
  const args = []
  return function f() {
    args.push(...arguments)
    if (++index < length) {
      return f
    } else {
      return fn.apply(null, args)
    }
  }
}

const fn = currying(add)
console.log(fn(1)(2)(3)(4))
