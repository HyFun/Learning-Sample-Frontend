<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-25 23:23:57
 * @Description  : toRef
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-25 23:31:11
-->
<template>
  <div>
    <h3>toRef使用</h3>
    <p>person: {{ person }}</p>
    <p>name: {{ name }}</p>
    name: <input v-model="name" type="text">
    <br>
    name2: <input v-model="name2" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from '@vue/runtime-core'

export default defineComponent({
  name: 'to-ref',
  setup(props) {
    const person = reactive({
      name: '张三'
    })
    // 1. 使用toRef 可以将响应式数据的属性单独提取出来，该新值也会影响原来数据中属性的值
    const name = toRef(person, 'name')

    // 2. 如果直接使用ref来引用响应式数据的属性
    const name2 = ref(person.name)
    return {
      person,
      name,
      name2
    }
  }
})
</script>
