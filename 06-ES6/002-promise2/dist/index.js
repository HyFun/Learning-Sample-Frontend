'use strict';

/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 11:24:35
 * @Description  : 手写promise
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-15 15:34:08
 */
/**
 * 手写promise 命名为Promise2
 */
// 三种状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';
var Promise2 = /** @class */ (function () {
    function Promise2(executor) {
        var _this = this;
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        // 缓存成功的回调
        this.onFulfilledCallback = [];
        // 缓存失败的回调
        this.onRejectedCallback = [];
        // resolve方法
        var resolve = function (value) {
            // 只有在pending状态的时候才执行
            if (_this.status === PENDING) {
                // 状态改为完成
                _this.status = FULFILLED;
                _this.value = value;
                // 判断回调中是否存在
                while (_this.onFulfilledCallback.length) {
                    _this.onFulfilledCallback.shift().call(_this, _this.value);
                }
            }
        };
        // reject方法
        var reject = function (reason) {
            if (_this.status === PENDING) {
                _this.status = REJECTED;
                _this.reason = reason;
                // 判断回调中是否存在
                while (_this.onRejectedCallback.length) {
                    _this.onRejectedCallback.shift().call(_this, _this.reason);
                }
            }
        };
        try {
            executor(resolve, reject);
        }
        catch (error) {
            reject(error);
        }
    }
    Promise2.prototype.then = function (onResolve, onReject) {
        var _this = this;
        // 如果不传，就使用默认函数
        onResolve =
            typeof onResolve === 'function' ? onResolve : function (value) { return value; };
        onReject =
            typeof onReject === 'function'
                ? onReject
                : function (reason) {
                    throw reason;
                };
        var promise2 = new Promise2(function (resolve, reject) {
            if (_this.status === FULFILLED) {
                queueMicrotask(function () {
                    try {
                        var x = onResolve(_this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            else if (_this.status === REJECTED) {
                queueMicrotask(function () {
                    try {
                        var x = onReject(_this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            else if (_this.status === PENDING) {
                // 将用户的回调缓存起来
                _this.onFulfilledCallback.push(function (value) {
                    queueMicrotask(function () {
                        try {
                            var x = onResolve(value);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                });
                _this.onRejectedCallback.push(function (reason) {
                    queueMicrotask(function () {
                        try {
                            var x = onReject(reason);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                        catch (error) {
                            reject(error);
                        }
                    });
                });
            }
        });
        return promise2;
    };
    Promise2.resolve = function (value) {
        if (value instanceof Promise2) {
            return value;
        }
        return new Promise2(function (resolve) {
            resolve(value);
        });
    };
    Promise2.reject = function (reason) {
        return new Promise2(function (resolve, reject) {
            reject(reason);
        });
    };
    /**
     * 提供给promise A+ 测试使用的方法
     */
    Promise2.deferred = function () {
        var result = {};
        result.promise = new Promise2(function (resolve, reject) {
            result.resolve = resolve;
            result.reject = reject;
        });
        return result;
    };
    return Promise2;
}());
function resolvePromise(promise2, x, resolve, reject) {
    // 如果相等了，说明return的是自己，抛出类型错误并返回
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #'));
    }
    if (typeof x === 'object' || typeof x === 'function') {
        if (!x) {
            return resolve(x);
        }
        var then = void 0;
        try {
            then = x.then;
        }
        catch (error) {
            return reject(error);
        }
        if (typeof then === 'function') {
            var called_1 = false;
            try {
                then.call(x, function (y) {
                    if (called_1)
                        return;
                    called_1 = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, function (r) {
                    if (called_1)
                        return;
                    called_1 = true;
                    reject(r);
                });
            }
            catch (error) {
                if (called_1)
                    return;
                reject(error);
            }
        }
        else {
            resolve(x);
        }
    }
    else {
        resolve(x);
    }
}

/*
 * @Author       : HyFun
 * @Date         : 2021-07-15 15:44:39
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-15 15:49:50
 */

module.exports = Promise2;
//# sourceMappingURL=index.js.map
