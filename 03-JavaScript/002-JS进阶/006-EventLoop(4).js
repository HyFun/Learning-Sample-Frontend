/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 10:29:58
 * @Description  : 事件循环
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 22:02:17
 */

// 案例解析地址：https://juejin.cn/post/6844903987183894535#heading-6

// new Promise((resolve, reject) => {
//   console.log('1')
//   resolve()
// })
//   .then(() => {
//     console.log('2')
//     new Promise((resolve, reject) => {
//       console.log('3')
//       resolve()
//     })
//       .then(() => {
//         console.log('4')
//         return Promise.resolve()
//       })
//       .then(() => {
//         console.log('5')
//       })
//   })
//   .then(() => {
//     console.log('6')
//   })
//   .then(() => {
//     console.log('7')
//   })
//   .then(() => {
//     console.log('8')
//   })
//   .then(() => {
//     console.log('9')
//   })

// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 5
// 9

new Promise((resolve, reject) => {
  console.log('外部promise')
  resolve()
})
  .then(() => {
    console.log('外部第一个then')
    new Promise((resolve, reject) => {
      console.log('内部promise')
      resolve()
    })
      .then(() => {
        console.log('内部第一个then')
      })
      .then(() => {
        console.log('内部第二个then')
      })
    return new Promise((resolve, reject) => {
      console.log('内部promise2')
      resolve()
    })
      .then(() => {
        console.log('内部第一个then2')
      })
      .then(() => {
        console.log('内部第二个then2')
      })
  })
  .then(() => {
    console.log('外部第二个then')
  })
// 外部promise
// 外部第一个then
// 内部promise
// 内部promise2
// 内部第一个then
// 内部第一个then2
// 内部第二个then
// 内部第二个then2
// 外部第二个then
