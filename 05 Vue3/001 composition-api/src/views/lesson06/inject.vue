<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 21:42:53
 * @Description  : inject子组件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 21:59:17
-->
<template>
  <div>
    <h4>我是子组件</h4>
    <p>inject: {{ name }}</p>
    <input v-model="name" type="text">
    <p>inject-object: {{ user }}</p>
    <input v-model="user.name" type="text">
    <input v-model="user.age" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'inject-component',
  setup(props) {
    const name = inject('name')
    const user = inject('user')
    return {
      name,
      user
    }
  }
})
</script>
