/*
 * @Author       : HyFun
 * @Date         : 2021-01-29 17:21:19
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-29 17:28:23
 */

 export function def(obj, key, val, enumerable) {
    Object.defineProperty(obj,key,{
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
 }