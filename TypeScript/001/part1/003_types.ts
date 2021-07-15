/*
 * @Author       : HyFun
 * @Date         : 2021-04-05 14:31:38
 * @Description  : 类型声明
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-05 15:11:19
 */

/**
 * 1. 使用冒号：声明变量的类型
 */
let a:number;
let b:string;
let c:boolean;
let d:Date;

/**
 * 2. 字面量方式声明
 */
let e: 10;
// e = 11 // ❌ 此时就不能进行修改值了，相当于声明了一个常量类型
let f:true;
// f = false // ❌

/**
 * 3. 联合类型
 */
let g:'hello'|'word'; // 表示g的值只能取 'hello' 或者 'word'
// let g: boolean | string;

/**
 * 4. 任意类型
 */

let h:any; // 表示的是任意类型。一个变量设置了any，相当于对该变量关闭了TS的类型检测
h = false
h = 'hello'
h = 12

/**
 * 5. 未知类型 unkonw
 */
let i:unknown;
// 可以和any一样，赋值为多个类型
i = 'hello'
i = 1
i = true

// 和any不同之处。any可以赋值给固定类型的变量，而unknow类型的变量不能赋值给其他类型的变量
let j:boolean
let k:any;
k = '123'
j = k // 没有错误
let l:unknown;
// j = l // 报错：不能将类型“unknown”分配给类型“boolean”。
// unknow 类型的变量，不能直接赋值给其他变量，实际上是一个安全的any类型

// 处理
// 1）判断类型
if(typeof l === 'boolean') {
    j = l // 没有错误
}
// 2) 类型断言，可以用来告诉解析器，变量的实际类型
j = l as boolean;
j = <boolean>l;


/**
 * 6. 函数返回值：void
 */
function m():void {
    
}

/**
 * 7. never: 永远都没有返回值
 * 返回“从不”的函数不能具有可访问的终结点。
 */
 function n():never {
    throw new Error('出现错误了~')
}


