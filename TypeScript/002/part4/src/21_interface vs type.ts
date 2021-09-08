/*
 * @Author       : HyFun
 * @Date         : 2021-09-08 10:55:16
 * @Description  : interface vs type https://github.com/SunshowerC/blog/issues/7
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 13:59:18
 */

/**
 * 1. 都可以描述一个对象或者函数
 */

{
  // interface
  interface User {
    name: string
    age: number
    getUserName: GET_USER_NAME
  }
  interface GET_USER_NAME {
    (): string
  }

  const user: User = {
    name: '张三',
    age: 20,
    getUserName() {
      return this.name
    }
  }

  // type
  type User2 = {
    name: string
    age: number
    getUserName: GET_USER_NAME2
  }
  type GET_USER_NAME2 = () => string

  const user2: User2 = {
    name: '张三',
    age: 20,
    getUserName() {
      return this.name
    }
  }
}

/**
 * 2. 都可以进行扩展
 */
{
  // interface
  interface A1 {
    name: string
    age: number
  }

  interface B1 extends A1 {
    setUserName(name: string): void
  }

  const user: B1 = {
    name: '张三',
    age: 12,
    setUserName(name) {
      this.name = name
    }
  }
  user.setUserName('哈哈哈')

  // type
  type A2 = {
    name: string
    age: number
  }

  type B2 = A2 & { setUserName(name: string): void }

  const user2: B2 = {
    name: '张三',
    age: 15,
    setUserName(name) {
      this.name = name
    }
  }
}

/**
 * 3. type 可以声明基本类型别名，联合类型，元组等类型
 */
{
  // 基本数据类型
  type Name = string | undefined

  // 联合类型
  interface A {
    wang: () => void
  }
  interface B {
    miao: () => void
  }
  type Animal = A | B

  // 元组类型
  type AnimalList = [A, B]

  // typeof
  const a = {
    name: '张三'
  }
  type S = typeof a
  const b: S = {
    name: '李四'
  }

  interface User {
    name: string
    age: number
  }

  type UserPlus<T, K extends keyof T> = {
    [P in K]?: T[P]
  }

  type U = UserPlus<User, 'name'>

  // 不能重复声明，一个U只能有一个声明
  //   type U = 132
}

/**
 * 4. interface可以声明多个
 * 多个同名的声明会合并
 */
{
  interface User {
    name: string
    age: number
    sex: string
  }

  interface User {
    name: string
    height: number
  }
}
