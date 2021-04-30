/*
 * @Author       : HyFun
 * @Date         : 2021-04-15 22:51:47
 * @Description  : 接口
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-15 23:21:16
 */
(function(){
    /**
     * 1. type 声明一个类型，表示变量的类型|结构
     */
    // 声明一个类型名称为person，结构是一个对象，包含 name，age字段
    type person = {
        name: string,
        age: number
    }
    const obj:person = {
        name: '孙悟空',
        age: 13
    }
    // 同名类型不允许重复声明
    // type person  // 报错：标识符“person”重复。ts(2300)

    /**
     * 2. 也可以用来声明一个变量的类型接口
     */
    interface Person {
        name: string
        age: number
    }
    // 可以声明同名的接口 声明过的属性类型就不能改变了
    interface Person {
        height: number
        // age: string // 错误 后续属性声明必须属于同一类型。属性“age”的类型必须为“number”，但此处却为类型“string”。ts(2717)
    }
    // 使用的时候两个同类型的结合起来
    const obj2: Person = {
        name: `猪八戒`,
        age: 12,
        height: 178
    }

    /**
     * 3. 接口可以在定义类的时候 可以限制类的结构
     *   接口中所有的属性和方法都没有值或实现
     *   接口不能进行实例化
     */
    interface Animal {
        name: string
        age: number
        say():void
    }
    
    /**
     * 实现接口的类，必须实现接口的属性和方法
     * 也可以扩展自己的方法和属性
     */
    class Dog implements Animal {
        public name: string
        public age: number
        constructor(name: string,age: number) {
            this.name = name
            this.age = age
        }
        say() {
            console.log(`汪汪汪~`);
        }

        run() {

        }
    }
    
    const dog = new Dog(`大黄`,12)
    dog.say()
})()