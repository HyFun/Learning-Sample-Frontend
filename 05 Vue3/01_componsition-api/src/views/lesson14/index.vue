<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-24 20:53:01
 * @Description  : shallow
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-24 22:01:41
-->
<template>
  <div>
    <h3>浅的reactive、浅的ref</h3>
    <h4>1. reactive</h4>
    <input v-model="m1.wife.name" type="text">
    <p>{{ m1.wife.name }}</p>
    <h4>2. shallowReactive</h4>
    <input v-model="m2.wife.name" type="text">
    <p>{{ m2.wife.name }}</p>
    <h4>3. ref</h4>
    <input v-model="m3" type="text">
    <p>{{ m3 }}</p>
    <h4>4. shallowReactive</h4>
    <input v-model="m4" type="text">
    <p>{{ m4 }}</p>
  </div>
</template>
<script lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from '@vue/reactivity'
export default {
  name: 'shallow',
  setup(prop) {
    const m1 = reactive({
      name: '张三1',
      age: 20,
      wife: {
        name: '小红1'
      }
    })
    const m2 = shallowReactive({
      name: '张三2',
      age: 20,
      wife: {
        name: '小红2'
      }
    })

    const m3 = ref('李四')
    const m4 = shallowRef('王五')

    return {
      m1,
      m2,
      m3,
      m4
    }
  }
}
</script>
