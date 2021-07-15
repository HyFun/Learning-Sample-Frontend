/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-24 21:45:36
 * @Description  : get set存取器
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-24 21:56:51
 */
(()=>{
    /**
     * 存取器
     *      控制对象的成员访问
     * 存取器函数一般依赖于其他属性，很像vue中的计算属性。
     * 
     * 如果只写了存取器的get方法，此时就相当于对 变量 声明了readonly属性
     */
    class Person {
        firstName: string
        lastName: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }

        get fullName(): string{
            return `${this.firstName}_${this.lastName}`
        }
    }

    const p =  new Person(`西门`,`吹雪`)

    console.log(p.fullName);
    // p.fullName = '呵呵呵' // 无法分配到 "fullName" ，因为它是只读属性。
    
})()