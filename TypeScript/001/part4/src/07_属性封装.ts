/*
 * @Author       : HyFun
 * @Date         : 2021-04-17 16:36:02
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-17 17:00:33
 */
(()=>{
    class Person {
        private name:string
        private age: number
        constructor(name:string,age:number) {
            this.name = name
            this.age = age
        }

        setName(name:string) {
            this.name = name
        }
        getName() {
            return this.name
        }
    }


    const swk = new Person('孙悟空',4)
    console.log(swk);
    console.log(swk.getName());
    // swk.getName() = '哈哈哈'
    swk.setName(`猪八戒`)
    console.log(swk.getName());
    

    /**
     * 构造函数中声明类的属性、简化
     */
    class A {
        constructor(public name:string,public age: number) { 
        }
    }

    const a = new A('A',1)
    console.log(a.name);
    
    
})()