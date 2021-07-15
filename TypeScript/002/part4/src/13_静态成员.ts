/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-24 21:57:11
 * @Description  : 静态成员
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-24 22:08:12
 */
(()=>{
    /**
     * 1. 静态方法可以访问静态属性(Class.静态属性|静态方法)
     * 2. 静态方法，不能访问实例对象、实例属性、实例方法 
     * 3. 实例可以访问实例属性和方法，不可以访问静态属性和方法
     * 4. 实例方法可以访问实例对象和实例方法，也可以访问静态属性和静态方法 （Class.静态属性|静态方法）的方式
     */
    class Person {
        static named: string = `我是一个静态变量`

        static say() {
            
        }

        hello () {
            console.log(`hello word!`);
        }
    }
})()