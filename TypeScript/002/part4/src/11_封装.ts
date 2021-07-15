/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-24 21:27:39
 * @Description  : private public protected
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-24 21:44:38
 */
(()=>{
    /**
     * 1. 修饰符
     * public
     *      修饰的属性和方法，自己、子类、实例对象都可以访问
     * 
     * private 
     *      private 修饰的属性和方法，自己可以访问。子类和实例不可访问
     * 
     * protected
     *      修饰的属性和方法，自己和其子类可以访问。实例对象不可访问
     * 
     */

    class Person {
        name: string
        age: number
        private weight: number
        protected money:number
        constructor(name:string,age:number){
            this.name = name
            this.age = age
            this.weight = 50
            this.money = 2000
        }
       
        getWeight():number {
            return this.weight
        }
    }

    class Son extends Person {
        say() {
        }
    }

    /**
     * 2. private 修饰构造函数  实现单例模式
     */
    class Single {
        private static instance:Single
        private constructor() {}
        static getInstance():Single{
            if(!Single.instance){
                Single.instance = new Single()
            }
            return Single.instance
        }

        hello():void {
            console.log(`你好，我是单例类`);    
        }
    }

    // 此时被private修饰的构造函数不能被实例化
    // const single = new Single() // 类“Single”的构造函数是私有的，仅可在类声明中访问。
    // 使用单例模式
    const single:Single = Single.getInstance()
    single.hello()
    
})()