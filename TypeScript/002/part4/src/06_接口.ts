/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-19 23:21:32
 * @Description  : 接口
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-19 23:42:26
 */
(()=>{

interface Person {
    // 可读写属性
    name: string
    // 只读属性
    readonly age:number
    // 可选属性
    set?:string
    // 不用设置默认值


    getName():string
    getAge():number
    sleep():void
}

const xiaoming: Person  = {
    name: '小明',
    age: 13,
    getName(){
        return '111'
    },
    getAge() {
        return 14
    },
    sleep() {
        console.log(`我在睡觉`);  
    }
}

console.log(xiaoming.age);

// xiaoming.age = 1 // 无法分配到 "age" ，因为它是只读属性




})()
