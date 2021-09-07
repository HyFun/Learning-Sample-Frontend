/*
 * @Author       : HyFun
 * @Date         : 2021-05-25 12:45:48
 * @Description  : 合并属性
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-06 18:06:15
 */
;(() => {
  interface A {
    name: string
  }

  interface B {
    name: number
  }

  interface C {
    name: number
  }

  type Person = A | B | C

  const person: Person = {
    name: 13
  }
})()
