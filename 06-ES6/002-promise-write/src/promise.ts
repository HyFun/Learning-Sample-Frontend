/*
 * @Author       : HyFun
 * @Date         : 2021-07-17 12:11:56
 * @Description  : promise
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-17 14:10:09
 */
export interface Resolve {
  (value?: any): void
}

export interface Reject {
  (reason?: any): void
}

type Excutor =
  | ((resolve: Resolve, reject: Reject) => void)
  | (() => void)
  | ((resolve: Resolve, reject?: Reject) => void)

/**
 * promise
 */
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Promise {
  status = PENDING
  value: any
  reason: any
  fulfilledCallback: Array<Resolve> = []
  rejectedCallback: Array<Reject> = []
  constructor(excutor?: Excutor) {
    try {
      excutor && excutor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  private resolve(value: any): void {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.fulfilledCallback.length) {
        this.fulfilledCallback.shift()?.call(this, value)
      }
    }
  }

  private reject(reason: any): void {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      while (this.rejectedCallback.length) {
        this.rejectedCallback.shift()?.call(this, reason)
      }
    }
  }

  then(onResolve: Resolve, onReject?: Reject) {
    onResolve = typeof onResolve === 'function' ? onResolve : (value) => value
    onReject =
      typeof onReject === 'function'
        ? onReject
        : (reason) => {
            throw reason
          }
    const promise = new Promise((resolve: Resolve, reject: Reject) => {
      if (this.status === FULFILLED) {
        handler(resolve, reject, onResolve, this.value)
      } else if (this.status === REJECTED) {
        handler(resolve, reject, onReject!, this.reason)
      } else {
        this.fulfilledCallback.push((value) => {
          handler(resolve, reject, onResolve, value)
        })
        this.rejectedCallback.push((reason) => {
          handler(resolve, reject, onReject!, reason)
        })
      }
    })

    function handler(
      resolve: Resolve,
      reject: Reject,
      callback: Resolve | Reject,
      value: any
    ) {
      queueMicrotask(() => {
        try {
          const x = callback(value)
          resolvePromise(promise, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    }
    function resolvePromise(
      promise: Promise,
      x: any,
      resolve: Resolve,
      reject: Reject
    ) {
      if (promise === x) {
        return reject(new TypeError(`error`))
      }
      if (typeof x === 'function' || typeof x === 'object') {
        if (!x) {
          return resolve(x)
        }
        let then: any
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
                (y: any) => {
                  if (called) return
                  called = true
                  resolvePromise(promise, y, resolve, reject)
                },
                (z: any) => {
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
    const result: any = {}
    result.promise = new Promise((resolve: Resolve, reject: Reject) => {
      result.resolve = resolve
      result.reject = reject
    })
    return result
  }
}

export default Promise
