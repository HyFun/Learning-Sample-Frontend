/*
 * @Author       : HyFun
 * @Date         : 2021-04-15 13:24:12
 * @Description  : 构造函数和this
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-15 13:38:53
 */
class Dog {
    name:string
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age = age
    }
    bark() {
        console.log(`汪汪汪~`);
    }
}

const dog1 = new Dog(`小白`,2)
const dog2 = new Dog(`小黑`,3)
console.log(dog1);
console.log(dog2);
