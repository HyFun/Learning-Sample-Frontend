/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-16 23:00:31
 * @Description  : 基础类型
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-16 23:15:40
 */

/**
 * 1. boolean
 *  
 */ 
// 1) 声明变量的时候设置类型
let flag:boolean
// 这样就确定了变量的类型
// flag = 1 // 报错
flag = true // 正确

// 2) 在声明变量的同时，给变量赋值，值是什么类型，则该变量就是什么类型的变量
let flag2 = true  // 此处已经设置了flag2的类型为boolean类型
// flag2 = '111'  // 如果再次进行赋值，则会报错
flag2 = false // 正确


/**
 * 2. number
 */
let num:number
num = 1
// num = '2' // 错误


/**
 * 3. string
 */
let str:string = '床前明月光'

/**
 * 4. undefine null
 */
// 1) 如果显示声明了类型，则不允许再修改
let uf: undefined = undefined
// uf = 1 // 报错
// 2） 如果隐式声明了类型，则可以进行修改
let uf2 = undefined
uf2 = 'hello' // 可以修改

// 同理null也是
let nu:null = null
// nu = 123 // 报错
let nu2 = null
nu2 = 123 // 正确