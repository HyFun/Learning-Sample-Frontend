<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-03 23:24:37
 * @Description  : vue3 proxy实现代理
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-03 23:38:28
-->
<template>
  <div>
    <h3>vue3 proxy实现代理</h3>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'proxy',
  setup(props) {
    const user = {
      name: '孙悟空',
      age: 500,
      wife: {
        name: '紫霞仙子',
        age: 200,
        cars: ['保时捷', '玛莎拉蒂']
      }
    }

    const proxyUser = new Proxy(user, {
      get(target, prop) {
        console.log(`get方法触发:::${prop}`)
        return Reflect.get(target, prop)
      },
      set(target, prop, val) {
        console.log(`set方法触发:::${prop}`)
        return Reflect.set(target, prop, val)
      },
      deleteProperty(target, prop) {
        console.log(`delete方法触发:::${prop}`)
        return Reflect.deleteProperty(target, prop)
      }
    })
    console.log(proxyUser.name)
    proxyUser.name = '猪八戒'
    console.log(user, proxyUser)
    delete proxyUser.age
    console.log(user, proxyUser)
    // proxy是深度代理，修改内部的对象或者数组也会触发
    proxyUser.wife.cars[0] = '卡车'
    console.log(user, proxyUser)
    proxyUser.wife.name = '嫦娥'
    console.log(user, proxyUser)
  }
})
</script>
