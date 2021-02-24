/*
 * @Author       : HyFun
 * @Date         : 2021-01-29 15:59:50
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-02-22 14:56:16
 */
import { def } from "./util/index.js";
import Dep from "./dep";
// -----------------处理数组--------------

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
    const result = origin.apply(this, args);
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
    observe(inserted);
    return result;
  });
});

// -----------------数据拦截--------------

function defineReactive(obj, key, val, enumerable) {
  const dep = new Dep();

  // 深层次递归
  observe(val);

  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: !!enumerable,
    get() {
      dep.depend();
      return val;
    },
    set(newVal) {
      if (newVal != val) {
        observe(newVal);
        val = newVal;
        dep.notify();
      }
    },
  });
}

/**
 *
 * @param {*} value
 */
export function observe(obj) {
  if (!(typeof obj === "object" && obj !== null)) {
    return;
  }

  // 之前没有对 obj 本身进行操作, 这一次就直接对 obj 进行判断
  if (Array.isArray(obj)) {
    // 对其每一个元素处理
    obj.__proto__ = transformArray;
    for (let i = 0; i < obj.length; i++) {
      observe(obj[i]); // 递归处理每一个数组元素
      // 如果想要这么处理, 就在这里继续调用 defineRective
      // defineReactive.call( vm, obj, i, obj[ i ], true );
    }
  } else {
    // 对其成员进行处理
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      let prop = keys[i]; // 属性名
      defineReactive(obj, prop, obj[prop], true);
      // 如果是个对象，则继续递归
      // 函数内部就是一个局部作用域, 这个 value 就只在函数内使用的变量 ( 闭包 )
      // if (typeof obj[prop] === "object" && obj[prop] != null) {
      //   // 是非数组的引用类型
      //   observe(obj[prop]); // 递归
      // }
    }
  }
}
