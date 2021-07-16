/*
 * @Author       : HyFun
 * @Date         : 2021-07-16 19:16:51
 * @Description  : 手写promise测试
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-16 19:35:35
 */
var PENDING = 'PENDING'
var RESOLVED = 'RESOLVED'
var REJECTED = 'REJECTED'

function Promise(excutor) {
  var that = this
  that.status = PENDING
  that.value = undefined
  that.reason = undefined
  that.onResolvedCallback = []
  that.onRejectedCallback = []

  var resolve = function (value) {
    if (that.status === PENDING) {
      that.status = RESOLVED
      that.value = value
      while (that.onResolvedCallback.length) {
        that.onResolvedCallback.shift().call(that, value)
      }
    }
  }
  var reject = function (reason) {
    if (that.status === PENDING) {
      that.status = REJECTED
      that.reason = reason
      while (that.onRejectedCallback.length) {
        that.onRejectedCallback.shift().call(that, reason)
      }
    }
  }
  try {
    excutor(resolve, reject)
  } catch (error) {}
}

Promise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (reason) => {
          throw reason
        }

  var that = this

  let promise = new Promise(function (resolve, reject) {
    if (that.status === RESOLVED) {
      handler(resolve, reject, onResolved, that.value)
    } else if (that.status === REJECTED) {
      handler(resolve, reject, onRejected, that.reason)
    } else {
      that.onResolvedCallback.push(function (value) {
        handler(resolve, reject, onResolved, value)
      })
      that.onRejectedCallback.push(function (reason) {
        handler(resolve, reject, onRejected, reason)
      })
    }
  })

  function handler(resolve, reject, callback, value) {
    queueMicrotask(function () {
      try {
        const x = callback(value)
        resolvePromise(promise, x, resolve, reject)
      } catch (err) {
        reject(err)
      }
    })
  }

  function resolvePromise(promise, v, resolve, reject) {
    if (promise === v) {
      return reject(new TypeError('Chaining cycle detected for promise #'))
    }
    if (typeof v === 'object' || typeof v === 'function') {
      if (!v) {
        return resolve(v)
      }
      let then
      try {
        then = v.then
      } catch (err) {
        return reject(err)
      }
      if (typeof then === 'function') {
        let called = false
        queueMicrotask(function () {
          try {
            then.call(
              v,
              (x) => {
                if (called) return
                called = true
                resolvePromise(promise, x, resolve, reject)
              },
              (y) => {
                if (called) return
                called = true
                reject(y)
              }
            )
          } catch (err) {
            if (called) return
            called = true
            reject(err)
          }
        })
      } else {
        resolve(v)
      }
    } else {
      resolve(v)
    }
  }

  return promise
}

Promise.deferred = function () {
  var result = {}
  result.promise = new Promise(function (resolve, reject) {
    result.resolve = resolve
    result.reject = reject
  })

  return result
}

module.exports = Promise
