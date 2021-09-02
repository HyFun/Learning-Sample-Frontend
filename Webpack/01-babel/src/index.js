/*
 * @Author       : HyFun
 * @Date         : 2021-09-02 20:51:38
 * @Description  :
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-02 23:38:06
 */

let a = 123

const b = () => {
  return a
}

class Person {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`hello world!`)
  }
}

Promise.resolve(1)
  .then((res) => {
    console.log(res)
  })
  .finally(() => {
    console.log(`promise执行完成`)
  })

export default Person
