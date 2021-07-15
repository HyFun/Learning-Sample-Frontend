/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-19 22:40:55
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-19 23:03:25
 */
/**
 * 1. any 类型表示变量可以设置任意类型的值
 */
// 1) 变量
let a: any = 0
a = 'hello'
a = true
a = null
a = undefined

// 2) 数组
let a2:any[] = [1,'hello',true,null,undefined]

let a3: Array<any> = [1,'hello',true,null,undefined]


/**
 * 2. void
 *   void类型声明函数的返回值  表示该函数没有返回值
 *   注意，函数默认返回值为undefined；函数返回 undefined、null也是可以通过的
 */

// 1) 无返回值  可以通过
function a4():void {}

// 2) 直接return  可以通过
function a5():void {
    return
}
// 3) 返回null  不能通过  因为null属于object类型
function a6():void {
    return null
}

// 4) 返回undefined  可以通过
function a7():void {
    return undefined
}

// 5) 返回string其他类型  不能通过  不能将类型“string”分配给类型“void”
function a8():void {
    return 'hello'
}


/**
 * 3. void 修饰 变量
 */
let a9: void = undefined
let a10: void = null   // 不能将类型“null”分配给类型“void”
let a11:void = 0 // 不能将类型“number”分配给类型“void”