/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-24 22:09:00
 * @Description  : 抽象类
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-24 22:18:34
 */
(()=>{
    /**
     * 1. 
     * 抽象类不可以实例化
     * 抽象类中的抽象属性和抽象方法必须要在子类中有具体实现
     * 抽象类中的方法可以有具体的实现（接口中则没有）
     * 
     */
    abstract class Animal {
        // 抽象属性
        protected name:string
        constructor(name:string) {
            this.name = name
        }
        // 抽象方法
        abstract say():void
        // 具体方法
        walk():void{
            console.log(`${this.name}用腿走路`); 
        }
    }
    
    class Dog extends Animal {
        say(): void {
            console.log(`${this.name}汪汪汪~`);
        } 
    }

    class Cat extends Animal {
        say(): void {
            console.log(`${this.name}喵喵喵~`);
        }
    }

    const dog = new Dog(`泰迪`)
    const cat = new Dog(`咪咪`)

    dog.say()
    cat.say()
})()