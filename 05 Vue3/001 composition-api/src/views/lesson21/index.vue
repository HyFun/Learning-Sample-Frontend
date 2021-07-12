<!--
 * @Author       : heyongfeng
 * @Date         : 2021-07-01 23:30:04
 * @Description  : 手写 shallowReadonly 和 readonly
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-02 00:11:00
-->
<template>
  <div>
    <h3>手写 shallowReadonly 和 readonly</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { readonly, shallowReadOnly } from './readonly'
export default defineComponent({
  name: 'custom-readonly',
  setup(props):any {
    const person1 = shallowReadOnly({
      name: '张三1',
      age: 20,
      wife: {
        name: '小红'
      }
    })
    /**
     * 1. shallowReadOnly
     */
    // 1) 获取数据
    console.log(person1.name)
    // 2) 设置name
    person1.name += '==' // Cannot assign to 'name' because it is a read-only property.
    console.log(person1)
    // 3) 设置内部name
    person1.wife.name += '==' // 内部name可以设置成功
    console.log(person1)
    // 4) 设置内部对象
    person1.wife.name = '1111'
    console.log(person1.wife.name) // 说明设置成功了  内部对象没有拦截
    // 5) 删除外部属性
    delete person1.name
    console.log(person1) // 拦截到了删除  没有删除成功
    // 6) 删除内部对象
    delete person1.wife.name
    console.log(person1) // wife.name 已被删除

    const person2 = readonly({
      name: '张三1',
      age: 20,
      wife: {
        name: '小红'
      }
    })
    /**
     * 2. shallowReadOnly
     */
    // 1) 获取数据
    console.log(person2.name)
    // 2) 设置name
    person2.name += '=='
    console.log(person2)
    // 3) 设置内部name
    person2.wife.name += '=='
    console.log(person2)
    
    // 4) 设置内部对象
    person2.wife.name = '1111'
    console.log(person2.wife.name) // 说明设置成功了  内部对象没有拦截
    // 5) 删除外部属性
    delete person2.name
    console.log(person2) // 拦截到了删除  没有删除成功
    // 6) 删除内部对象
    delete person2.wife.name
    console.log(person2) // wife.name 已被删除
  }
})
</script>
