/*
 * @Author       : HyFun
 * @Date         : 2021-07-19 22:25:50
 * @Description  : next函数
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-19 22:49:27
 */

/**
 * Generator.prototype.next()
 * 可以理解为是一个启动方法
 * 作用是分阶段的执行generator函数
 * 每次调用.next() 会返回一个对象
 * 这个对象里面表示当前阶段的结果信息，done表示是否执行结束
 */

function* fn() {
    console.log(`1111111`);
    yield 1
    console.log('22222');
    yield 2
    yield 3
    yield 4
}

/**
 * 调用generator的时候并不会立即执行函数体，
 * 直到调用next()方法的时候才会去执行第一个yiled和其之前的函数体
 */
let generator = fn()
// let result = generator.next()
// console.log(result);
// console.log(generator.next());


// while(!result.done) {
//     console.log(result);
//     result = generator.next()
// }