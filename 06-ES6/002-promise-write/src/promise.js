/*
 * @Author       : heyongfeng
 * @Date         : 2021-07-28 14:34:47
 * @Description  : 手写promise测试
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-28 15:15:34
 */
var FULFILLED = 'FULFILLED'
var PENDING = 'PENDING'
var REJECTED = 'REJECTED'

function Promise(excutor) {
  var self = this

  self.status = PENDING
  self.value = null
  self.reason = null
  self.onFulfilledCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (self.status === PENDING) {
      self.status = FULFILLED
      self.value = value
      while (self.onFulfilledCallback.length) {
        self.onFulfilledCallback.shift()(value)
      }
    }
  }
  function reject(reason) {
    if (self.status === PENDING) {
      self.status = REJECTED
      self.reason = reason
      while (self.onRejectedCallback.length) {
        self.onRejectedCallback.shift()(reason)
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

  var self = this
  var promise = new Promise(function (resolve, reject) {
    if (self.status === FULFILLED) {
      handler(resolve, reject, onResolve, self.value)
    } else if (self.status === REJECTED) {
      handler(resolve, reject, onReject, self.reason)
    } else {
      self.onFulfilledCallback.push(function (value) {
        handler(resolve, reject, onResolve, value)
      })

      self.onRejectedCallback.push(function (reason) {
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

  function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
      return reject(new TypeError('xxxxx'))
    }
    if (typeof x === 'function' || typeof x === 'object') {
      if (!x) {
        return resolve(x)
      }
      let then
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
                resolvePromise(promise, y, resolve, reject)
              },
              (z) => {
                if (called) return
                called = true
                reject(z)
              }
            )
          } catch (error) {
            if (called) return
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
  var result = {}
  result.promise = new Promise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

module.exports = Promise
