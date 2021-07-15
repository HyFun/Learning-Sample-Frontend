/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 18:28:40
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 18:29:28
 */
const Promise2 = require('./dist/index')

Promise2.resolve()
  .then(() => {
    console.log(0)
    return Promise2.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })

Promise2.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })
