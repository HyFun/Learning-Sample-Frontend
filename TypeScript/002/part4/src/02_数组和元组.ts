/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-19 22:16:50
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-19 22:32:28
 */

/**
 * 1. 数组
 */
// 1) 声明数组的方式  字面量的方式，相当于java的声明数组
let arr: number[] = [1,2,3,4]

// 2) 使用泛型的方式  这种方式可以声明多种类型
let arr2: Array<number|string> = [1,2,3,'4']

/**
 * 2. 元组
 *     元组规定了数组的长度和元素类型
 */
let arr3: [string,number] = ['张三',18] // 规定了数组的长度为2，且数组内容  第一个元素为字符串类型

let arr4: [string,number?] = ['zhang',1] // 规定数组第一个元素必填，第二个元素选填
