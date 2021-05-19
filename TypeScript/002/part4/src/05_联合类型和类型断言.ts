/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-19 23:09:08
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-19 23:21:05
 */

/**
 * 1. 联和类型
 * 定义变量  函数返回值  可以使用 | 来设置多个类型
 */
let b1:number|string = '123'
function b2(name: string| number):number|string {
    return name
}

/**
 * 2. 断言  as
 */
// 1) 使用typeof来进行判断数据类型
function b3(name: string|number):string {
    if(typeof name === 'string'){
        return name.toString()
    }
    // 否则就是number类型
    return name.toFixed()
}

// 2) 类型断言 <类型>

let b4:any = 123.456
console.log((<number>b4).toFixed(2));

// 3) 类型推断
console.log((b4 as number).toFixed(2));


/**
 * 3. 如果声明的变量没有赋值，也没有设置类型，则变量默认使用any类型
 */
let b5;
b5 = 1
b5 = 'hello'
b5 = undefined
b5 = true