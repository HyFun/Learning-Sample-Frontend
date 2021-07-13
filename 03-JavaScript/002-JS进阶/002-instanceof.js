/*
 * @Author       : HyFun
 * @Date         : 2021-07-13 22:31:15
 * @Description  : instanceof实现
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 22:38:10
 */
function instance(L, R) {
  var proto = R.prototype
  L = L.__proto__
  while (L) {
    if (L === proto) {
      return true
    }
    L = L.__proto__
    if (!L) {
      return false
    }
  }
}

console.log(instance('', String)) // true
console.log(instance('', Boolean)) // false
console.log(instance(true, Boolean)) // true
console.log(instance(123, Number)) // true
console.log(instance('', Number)) // true
console.log(instance('', Object)) // true
