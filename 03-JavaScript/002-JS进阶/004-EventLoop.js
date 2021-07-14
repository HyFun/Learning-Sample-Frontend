/*
 * @Author       : HyFun
 * @Date         : 2021-07-14 13:05:28
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-14 18:35:08
 */

// -----------------------------------------------

// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end')
// }
// async1()

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// new Promise((resolve) => {
//   console.log('Promise')
//   resolve()
// })
//   .then(function () {
//     console.log('promise1')
//   })
//   .then(function () {
//     console.log('promise2')
//   })

// console.log('script end')

// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

// -----------------------------------------------

console.log('script start')

async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
  return Promise.resolve().then(() => {
    console.log('async2 end1')
  })
}
async1()

setTimeout(function () {
  console.log('setTimeout')
}, 0)

new Promise((resolve) => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })

console.log('script end')

// script start
// async2 end
// Promise
// script end
// async2 end1
// promise1
// promise2
// async1 end
// setTimeout

// -----------------------------------------------
// console.log('start')

// setTimeout(() => {
//   // callback1
//   console.log(111)
//   setTimeout(() => {
//     // callback2
//     console.log(222)
//   }, 0)
//   setImmediate(() => {
//     // callback3
//     console.log(333)
//   })
//   process.nextTick(() => {
//     // callback4
//     console.log(444)
//   })
// }, 0)

// setImmediate(() => {
//   // callback5
//   console.log(555)
//   process.nextTick(() => {
//     // callback6
//     console.log(666)
//   })
// })

// setTimeout(() => {
//   // callback7
//   console.log(777)
//   process.nextTick(() => {
//     // callback8
//     console.log(888)
//   })
// }, 0)

// process.nextTick(() => {
//   // callback9
//   console.log(999)
// })

// console.log('end')

// start
// end
// 999
// 111
// 444
// 777
// 888
// 555
// 666
// 333
// 222

// -----------------------------------------------
// console.log('1')

// setTimeout(function () {
//   console.log('2')
//   process.nextTick(function () {
//     console.log('3')
//   })
//   new Promise(function (resolve) {
//     console.log('4')
//     resolve()
//   }).then(function () {
//     console.log('5')
//   })
// })

// new Promise(function (resolve) {
//   console.log('7')
//   resolve()
// })
//   .then(function () {
//     console.log('8')
//   })
//   .then(function () {
//     console.log(13)
//   })

// Promise.resolve()
//   .then(function () {
//     console.log(14)
//   })
//   .then(function () {
//     console.log(15)
//   })

// process.nextTick(function () {
//   console.log('6')
// })

// setTimeout(function () {
//   console.log('9')
//   process.nextTick(function () {
//     console.log('10')
//   })
//   new Promise(function (resolve) {
//     console.log('11')
//     resolve()
//   }).then(function () {
//     console.log('12')
//   })
// })

// 1 7 6 8 14 13 15 2 4 3 5 9 11 10 12
