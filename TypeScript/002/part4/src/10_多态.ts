/*
 * @Author       : heyongfeng
 * @Date         : 2021-05-22 00:10:18
 * @Description  : 类的多态
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-22 00:19:13
 */
(() => {
  class Parent {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    run(){
        console.log(`我能跑50米`);
    }
  }
  class Son extends Parent{
      subName: string
      constructor(name:string, age: number, subName: string){
          super(name,age)
          this.subName = subName
      }

      run(){
          console.log(`我能跑100米`);
      }
  }

  const son:Parent = new Son(`小明`,18,'小明明')
  console.log(son.name,son.age);
  son.run()
  
})();
