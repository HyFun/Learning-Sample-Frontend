/*
 * @Author       : HyFun
 * @Date         : 2021-07-21 15:19:28
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-21 15:42:32
 */

/**
 * 1. 函数的流程管理
 */
function Thunk(fn) {
  return function () {
    const args = Array.from(arguments)
    return function (done) {
      var called = false
      args.push(function () {
        if (called) return
        called = true
        done.apply(this, arguments)
      })
      try {
        fn.apply(this, args)
      } catch (error) {
        done(error)
      }
    }
  }
}

var fs = require('fs')

var readFileThunk = Thunk(fs.readFile)

var gen = function* () {
  var r1 = yield readFileThunk('./README.md')
  console.log(r1)
  var r2 = yield readFileThunk('./03-JavaScript/README.md')
  console.log(r2)
}

var g = gen()

var r1 = g.next()
r1.value(function (err, data) {
  if (err) throw err
  var r2 = g.next(data)
  r2.value(function (err, data) {
    if (err) throw err
    g.next(data)
  })
})

/**
 * 2. 函数的自动流程管理
 */
function run(fn) {
  var gen = fn()

  function next(err, data) {
    var result = gen.next(data)
    if (result.done) return
    result.value(next)
  }

  next()
}

run(gen)
