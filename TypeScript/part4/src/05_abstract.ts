/*
 * @Author       : HyFun
 * @Date         : 2021-04-15 22:26:53
 * @Description  : 抽象类
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-15 23:06:33
 */
(()=>{
    /**
     * abstract所修饰的类，不允许实例化
     */
    abstract class Animal {
        // 继承的子类，必须定义抽象属性
        abstract name:string
        constructor(){}
        // abstract修饰的方法不能有具体的实现，而且还需要说明返回类型
        // 继承的子类，必须重写该抽象方法
        abstract say():void
    }
    // const animal = new Animal() // 无法创建抽象类的实例。ts(2511)

    class Cat extends Animal {
        name:string = `猪八戒`
        say(){
            console.log(this);
        }
    }
})()

