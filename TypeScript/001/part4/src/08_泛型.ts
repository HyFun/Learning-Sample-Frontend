/*
 * @Author       : HyFun
 * @Date         : 2021-04-17 17:01:22
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-04-17 17:09:33
 */
(()=>{
    class Data<T> {
        constructor(public code:number,public data:T) {
        }
    }

    class Person {
        constructor(public name:string,public age:number) {
            
        }
    }

    class Animal {
        constructor(public name:string) {
        }
    }

    console.log(new Data<Person>(0,new Person(`孙悟空`,18)));
    console.log(new Data<Animal>(0,new Animal(`猪`)));
    
})()