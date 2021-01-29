/*
 * @Author       : HyFun
 * @Date         : 2021-01-29 17:20:37
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-01-29 17:43:17
 */

import { def } from "./index.js";

const originArrayProto = Array.prototype;
const transformArray = Object.create(originArrayProto);

const ARRAY_INTERCEPTOR_METHODS = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

ARRAY_INTERCEPTOR_METHODS.forEach((method) => {
  const origin = originArrayProto[method];
  def(transformArray, method, function mutator(...args) {
    const result = origin.applay(this, args);
    // 对更新进来的数据进行拦截
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // 通知数组更新
    ob.dep.notify();
    return result;
  });
});
