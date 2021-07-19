/*
 * @Author       : HyFun
 * @Date         : 2021-07-19 23:00:02
 * @Description  : next的参数
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-19 23:05:37
 */

/**
 * next()的参数，表示设置上一个yiled的返回值，next()的参数为空
 * 那么上一个yiled的返回值就是undefined
 * 如果给第一个next()设置参数，就没有意义，因为执行第一个next时，没有上一个yiled
 */
function* fn() {
  let a = 1
  let b = yield ++a
  console.log(`b=${b}`)
  yield ++a
  yield ++a
}

const generator = fn()
console.log(generator.next());
console.log(generator.next('hello world'));
console.log(generator.next());
