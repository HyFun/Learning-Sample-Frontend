/*
 * @Author       : HyFun
 * @Date         : 2021-08-31 16:37:41
 * @Description  : promise.all并发限制
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-08-31 17:32:28
 */

function asyncPool(
  limit = 1,
  list = [],
  createPromiseFn = () => Promise.resolve()
) {
  let index = 0
  let ret = []
  let runningArray = []
  function run() {
    // 递归出口
    if (index >= list.length) {
      return Promise.resolve()
    }
    const item = list[index]
    const p = Promise.resolve().then(() => createPromiseFn(item, index++, list))
    // 将p存放到ret中
    ret.push(p)
    //
    const e = p.then(() => runningArray.splice(runningArray.indexOf(e), 1))
    runningArray.push(e)
    let r = Promise.resolve()
    if (runningArray.length >= limit) {
      r = Promise.race(runningArray)
    }
    return r.then(() => run())
  }
  return run().then(() => Promise.all(ret))
}

// 使用Promise.all
function createPromise(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item)
      resolve()
    }, 1000)
  })
}

/**
 * 使用Promise.all 会一次性执行所创建的
 */

// Promise.all([
//   createPromise(1),
//   createPromise(2),
//   createPromise(3),
//   createPromise(4),
//   createPromise(5),
//   createPromise(6),
//   createPromise(7),
//   createPromise(8),
//   createPromise(9),
//   createPromise(10)
// ]).then(() => {
//   console.log(`Promise.all执行完成`)
// })

asyncPool(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], createPromise).then(() => {
  console.log(`Promise.all执行完成`)
})
