/*
 * @Author       : HyFun
 * @Date         : 2021-04-01 13:08:52
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-01 14:52:58
 */

/**
 * 1. 如果声明了某个变量的类型，再次赋值的时候需要赋对应类型的值
 */

let a: number;

a = 2;

// a='hello' // 此行代码会报错

/**
 * 2. 如果变量的声名和赋值同时进行，TS会自动对变量进行类型检测
 */

let b = true;
b = false;
// b = 'hello' // 此行代码会报错，因为变量b的类型已经确定为了 boolean 类型了

// 如果赋值的为undefined | null 则不会有这个验证
let c = undefined;
c = 1;
c = true;

/**
 * 3. 函数参数变量的类型
 */
function sum(a: number, b: number) {
  return a + b;
}
sum(123, 456);
// sum(123, "456"); // 提示参数的类型错误

/**
 * 4. 函数返回值声明
 */

function sum1(a:number,b:number): number {
    return a + b
}

let total = sum1(1,2)