/*
 * @Author       : HyFun
 * @Date         : 2021-07-19 23:00:02
 * @Description  : for...of...遍历generator迭代器
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-19 23:08:27
 */

function* fn() {
  let a = 1
  let b = yield ++a
  console.log(`b=${b}`)
  yield ++a
  yield ++a
}
const object = fn()
// 使用for...of...迭代器，就无法给上一个yiled进行赋值的操作了
for (const iterator of object) {
  console.log(iterator);
}
