/*
 * @Author       : HyFun
 * @Date         : 2021-04-10 11:53:45
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-11 12:31:16
 */
import {hi} from './hi'

const obj:{name:string,[prop:string]:any} = {name: '孙悟空'}
obj.age = 256
console.log(obj);


console.log('Hello Typescript!!!');
function sum(a:number,b:number):number {
    return a+b
}
console.log(sum(123,456));
console.log(hi);


Promise.resolve('promise')




