/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-22 00:10:18
 * @Description  : 类的多态
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-07 15:26:25
 */
;(() => {
  class Parent {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    run() {
      console.log(`我能跑50米`)
    }
  }
  class Son extends Parent {
    subName: string
    constructor(name: string, age: number, subName: string) {
      super(name, age)
      this.subName = subName
    }

    run() {
      console.log(`我能跑100米`)
    }

    say() {
      console.log(`我的名字叫${this.name}`)
    }
  }

  const son: Parent = new Son(`小明`, 18, '小明明')
  console.log(son.name, son.age)
  son.run()
  // son.say() 此时会报错，因为父类型上没有这个方法
})()
