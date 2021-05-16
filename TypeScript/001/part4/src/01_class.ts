/*
 * @Author       : HyFun
 * @Date         : 2021-04-11 13:47:19
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-11 13:57:17
 */
class Person {
    // 实例属性
    name:string = '孙悟空'
    age: number = 18
    // 静态属性
    static description:string = '西游记中的神仙人物'

    // 实例方法
    say():void {
        console.log('妖怪哪里走？！');
    }
    // 静态方法
    static skill():void {
        console.log('拥有七十二变');
    }

    // 只读属性
    readonly height:number = 178
}

const p = new Person()
console.log(p.name,p.age);
p.say()
console.log(Person.description);
Person.skill()

console.log(p.height);
// p.height = 123 // 报错，只读属性不能被赋值

// 测试声明对象是否可以设置只读属性
const obj:{readonly name:string} = {name: '猪八戒'}
console.log(obj.name);
// obj.name = '二师兄' // 说明也可以修饰普通的对象属性

