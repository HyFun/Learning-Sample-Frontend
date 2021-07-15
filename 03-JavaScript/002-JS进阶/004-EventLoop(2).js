/*
 * @Author       : HyFun
 * @Date         : 2021-07-14 13:05:28
 * @Description  : EventLoop之 async/await
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 10:40:27
 */


console.log('1')

async function async1() {
  await async2()
  console.log('2')
}
async function async2() {
  console.log('3')
  return Promise.resolve().then(() => {
    console.log('4')
  })
}
async1()

setTimeout(function () {
  console.log('5')
}, 0)

new Promise((resolve) => {
  console.log('6')
  resolve()
})
  .then(function () {
    console.log('7')
  })
  .then(function () {
    console.log('8')
  })

console.log('9')
// 1
// 3
// 6
// 9
// 4
// 7
// 8
// 2
// 5

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
