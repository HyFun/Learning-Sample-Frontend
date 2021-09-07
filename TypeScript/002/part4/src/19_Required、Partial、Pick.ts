/*
 * @Author       : HyFun
 * @Date         : 2021-05-25 12:45:48
 * @Description  : 合并属性
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-07 10:18:16
 */
;(() => {
  interface User {
    name: string
    age: number
  }

  /**
   * 1. 复制
   */
  type Partial<T> = {
    [P in keyof T]: T[P]
  }

  type W = Partial<User>

  const person: W = {
    name: '123',
    age: 123
  }

  /**
   * 2. 选择性复制
   */

  type Pick<T, V extends keyof T> = {
    [P in V]: T[P]
  }

  const person2: Pick<User, 'name'> = {
    name: 'name'
  }
})()
