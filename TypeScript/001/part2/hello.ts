/*
 * @Author       : HyFun
 * @Date         : 2021-04-06 20:36:21
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-06 21:28:05
 */
console.log("hello hello!");

let a: (a: number, b: number) => number;
a = function (a, b) {
  return a + b;
};
console.log(a(1, 2));

import {app} from './word'
console.log(app);

