/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 10:29:58
 * @Description  : 事件循环
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 10:31:00
 */

// 案例解析地址：https://mp.weixin.qq.com/s/UJKLVrSQWCxn8t78CqYfug

Promise.resolve()
  .then(() => {
    console.log(0)
    return Promise.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })

Promise.resolve()
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
