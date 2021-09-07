/*
 * @Author       : HyFun
 * @Date         : 2021-05-25 12:45:48
 * @Description  : 合并属性
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-06 18:23:22
 */
;(() => {
  interface A {
    name: string
    age: number
    sex: string
  }

  function get<T extends object, V extends keyof T>(o: T, prop: V): T[V] {
    return o[prop]
  }

  const person: A = {
    name: '张三',
    age: 14,
    sex: '男'
  }
  console.log(get(person, 'name'))
  console.log(get(person, 'age'))
})()
