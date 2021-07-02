<!--
 * @Author       : heyongfeng
 * @Date         : 2021-07-03 00:50:37
 * @Description  : 手写ref和shallowRef
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-03 01:14:24
-->
<template>
  <div>
    <h3>手写ref和shallowRef</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { shallowRef } from './ref'

export default defineComponent({
  name: 'write-ref',
  setup(props):void {
    const person = shallowRef({ name: '张三', age: 20, wife: { name: '小红' }})
    // 读取值
    console.log(person.value.name)
    // 读取深度值
    console.log(person.value.wife.name)
    // 设置值
    person.value.name = '张四'
    console.log(person)
    // 设置深度值
    person.value.wife.name = '小吴'
    console.log(person)
  }
})
</script>
