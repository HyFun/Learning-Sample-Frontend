/*
 * @Author       : HyFun
 * @Date         : 2021-04-05 15:11:41
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-05 15:58:25
 */

/**
 * 1. object 表示js的一个对象
 */
let a:object;
a = {}
a = '111' // 报错 字面量方式的基本数据类型会报错
a = new String('111')

a = [] // 数组也是个对象
a = new Date()
a = new Blob()
a = new Function()
a = function() {}

let b:{}// 也是声明一个对象

/**
 * 2. {} 用来指定对象中包含哪些属性，语法：{属性名: 属性值|属性值类型}
 */
let c : {name: string, age?: number} // 问号表示可选属性，可以有age，也可以没有
c = {name: '孙悟空'}
c = {name: '孙悟空', age: 18} // 多了属性也不行

/**
 * 3. 对象中只指定一个属性，其他属性可有可无
 */
let d : {name: string, [prop: string]: unknown}

d = {name: '猪八戒', age: 17, height: '170'} // 此时就可以添加多个属性了

/**
 * 4. 函数结构的类型声明
 */

let e : (a:number,b:number)=>number  // 解释：声明e变量的类型是一个参数为a、b都为数字类型且返回值是一个数字类型的函数
e = function(a,b){
    return a+b
}
e(1,2)

/**
 * 5. 数组类型声明
 */
// 1) 方式一
let f: string[] // 表示声明字符串数组
f = [1,2,3] // 错误，因为不符合声明的类型
f = ['1','2','3']
// 2) 方式二
let g: Array<string> // 也是声明一个字符串数组


/**
 * 6. 元组：固定长度的数组 tule
 */
let h:[string,string]
h = ['1','2',3]


/**
 * 7. 枚举enum
 */

enum Gender {
    男 = '1',
    女 = '2'
}

let i: {name: string,gender:Gender}
i = {name: '孙悟空', gender: Gender.男}
i = {name: '王母娘娘', gender: Gender.女}

/**
 * 8. 类型别名 type
 */

type numbers = 1 | 2 | 3 | 4 | 5;
let j: numbers
let k: numbers