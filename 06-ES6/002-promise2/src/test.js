/*
 * @Author       : HyFun
 * @Date         : 2021-07-16 21:55:13
 * @Description  : xxx
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-16 23:20:42
 */
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

function Promise(excutor) {
  const that = this
  that.status = PENDING
  that.value = undefined
  that.reason = undefined
  that.fulfilledCallback = []
  that.rejectCallback = []

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED
      that.value = value
      while (that.fulfilledCallback.length) {
        that.fulfilledCallback.shift().call(that, value)
      }
    }
  }
  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED
      that.reason = reason
      while (that.rejectCallback.length) {
        that.rejectCallback.shift().call(that, reason)
      }
    }
  }
  try {
    excutor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onResolve, onReject) {
  onResolve = typeof onResolve === 'function' ? onResolve : (value) => value
  onReject =
    typeof onReject === 'function'
      ? onReject
      : (reason) => {
          throw reason
        }
  var that = this
  var promise = new Promise(function (resolve, reject) {
    if (that.status === FULFILLED) {
      handler(resolve, reject, onResolve, that.value)
    } else if (that.status === REJECTED) {
      handler(resolve, reject, onReject, that.reason)
    } else if (that.status === PENDING) {
      that.fulfilledCallback.push((value) => {
        handler(resolve, reject, onResolve, value)
      })
      that.rejectCallback.push((reason) => {
        handler(resolve, reject, onReject, reason)
      })
    }
  })

  function handler(resolve, reject, callback, value) {
    queueMicrotask(() => {
      try {
        var x = callback(value)
        resolvePromise(promise, x, resolve, reject)
      } catch (error) {
        reject(error)
      }
    })
  }

  function resolvePromise(p, x, resolve, reject) {
    if (p === x) {
      return reject(new TypeError('Chaining cycle detected for promise #'))
    }
    if (typeof x === 'object' || typeof x === 'function') {
      if (!x) {
        return resolve(x)
      }
      var then
      try {
        then = x.then
      } catch (error) {
        return reject(error)
      }
      if (typeof then === 'function') {
        let called = false
        queueMicrotask(() => {
          try {
            then.call(
              x,
              (y) => {
                if (called) return
                called = true
                resolvePromise(p, y, resolve, reject)
              },
              (z) => {
                if (called) return
                called = true
                reject(z)
              }
            )
          } catch (error) {
            if (called) return
            called = true
            reject(error)
          }
        })
      } else {
        resolve(x)
      }
    } else {
      resolve(x)
    }
  }

  return promise
}

Promise.deferred = function () {
  const result = {}
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

module.exports = Promise
