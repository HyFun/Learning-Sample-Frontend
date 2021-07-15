/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-21 23:42:41
 * @Description  : 类
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-21 23:55:03
 */
(()=>{
    enum Gender {
        男,
        女
    }


    class Person {
        name: string
        age: number
        gender: Gender
        constructor(name:string,age:number,gender:Gender) {
            this.name = name
            this.age = age
            this.gender = gender
        }

        toString() {
            console.log(this.name,this.age,Gender[this.gender]);
        }
    }

    const person = new Person('张三',18, Gender.男)
    person.toString()
})()