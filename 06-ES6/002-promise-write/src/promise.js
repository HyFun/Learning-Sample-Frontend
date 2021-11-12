const PEDNING = 'PEDNING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
  status = PEDNING
  value = null
  reason = null
  fulfilledCallback = []
  rejectedCallback = []

  constructor(excutor) {
    const resolve = (value) => {
      if (this.status === PEDNING) {
        this.status = FULFILLED
        this.value = value
        while (this.fulfilledCallback.length) {
          this.fulfilledCallback.shift()(value)
        }
      }
    }
    const reject = (reason) => {
      if (this.status === PEDNING) {
        this.status = REJECTED
        this.reason = reason
        while (this.rejectedCallback.length) {
          this.rejectedCallback.shift()(reason)
        }
      }
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : (value) => value
    onReject =
      typeof onReject === 'function'
        ? onReject
        : (reason) => {
            throw reason
          }

    let promise = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        handler(resolve, reject, onResolve, this.value)
      } else if (this.status === REJECTED) {
        handler(resolve, reject, onReject, this.reason)
      } else {
        this.fulfilledCallback.push((value) => {
          handler(resolve, reject, onResolve, value)
        })

        this.rejectedCallback.push((reason) => {
          handler(resolve, reject, onReject, reason)
        })
      }
    })

    function handler(resolve, reject, callback, value) {
      queueMicrotask(() => {
        try {
          const x = callback(value)
          resolvePromise(promise, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    }

    function resolvePromise(promise, x, resolve, reject) {
      if (promise === x) {
        return reject(new TypeError('error'))
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

  static deferred() {
    const result = {}
    result.promise = new Promise((resolve, reject) => {
      result.resolve = resolve
      result.reject = reject
    })
    return result
  }
}

module.exports = Promise
