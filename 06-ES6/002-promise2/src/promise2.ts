/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 11:24:35
 * @Description  : 手写promise https://juejin.cn/post/6945319439772434469
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 18:51:27
 */

// 三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise2 {
  status = PENDING
  value: any = null
  reason: any = null
  // 缓存成功的回调
  onFulfilledCallback: Array<Function> = []
  // 缓存失败的回调
  onRejectedCallback: Array<Function> = []
  constructor(executor: Function) {
    // resolve方法
    const resolve = (value: any) => {
      // 只有在pending状态的时候才执行
      if (this.status === PENDING) {
        // 状态改为完成
        this.status = FULFILLED
        this.value = value
        // 判断回调中是否存在
        while (this.onFulfilledCallback.length) {
          this.onFulfilledCallback.shift()!.call(this, this.value)
        }
      }
    }
    // reject方法
    const reject = (reason: any) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        // 判断回调中是否存在
        while (this.onRejectedCallback.length) {
          this.onRejectedCallback.shift()!.call(this, this.reason)
        }
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  /**
   * then方法
   */
  then(onResolve?: any, onReject?: any) {
    // 如果不传，就使用默认函数
    onResolve =
      typeof onResolve === 'function' ? onResolve : (value: any) => value
    onReject =
      typeof onReject === 'function'
        ? onReject
        : (reason: any) => {
            throw reason
          }
    const promise2 = new Promise2((resolve: Function, reject: Function) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onResolve(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onReject(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === PENDING) {
        // 将用户的回调缓存起来
        this.onFulfilledCallback.push((value: any) => {
          queueMicrotask(() => {
            try {
              const x = onResolve(value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallback.push((reason: any) => {
          queueMicrotask(() => {
            try {
              const x = onReject(reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })
    return promise2
  }

  /**
   * catch方法
   */
  catch(onRejected: any) {
    return this.then(undefined, onRejected)
  }

  static resolve = function (value?: any) {
    if (value instanceof Promise2) {
      return value
    }
    return new Promise2((resolve: any) => {
      resolve(value)
    })
  }

  static reject = function (reason?: any) {
    return new Promise2((resolve: any, reject: any) => {
      reject(reason)
    })
  }

  /**
   * 提供给promise A+ 测试使用的方法
   */
  static deferred = function () {
    var result: any = {}
    result.promise = new Promise2(function (resolve: any, reject: any) {
      result.resolve = resolve
      result.reject = reject
    })

    return result
  }
}

function resolvePromise(
  promise2: Promise2,
  x: any,
  resolve: Function,
  reject: Function
) {
  // 如果相等了，说明return的是自己，抛出类型错误并返回
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #'))
  }
  if (typeof x === 'object' || typeof x === 'function') {
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
      try {
        then.call(
          x,
          (y: any) => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (r: any) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (error) {
        if (called) return
        reject(error)
      }
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }
}

export default Promise2
