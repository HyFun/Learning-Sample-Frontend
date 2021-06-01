<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 15:44:42
 * @Description  : reactive 声明响应式对象
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:33:11
-->
<template>
  <div>
    <h4>reactive</h4>
    <p>name: {{ user.name }}</p>
    <input v-model="user.name" type="text">
    <p>age: {{ user.age }}</p>
    <input v-model="user.age" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'lesson03',
  setup(props) {
    /**
     * reactive 
     *    定义响应式对象
     */
    const user = reactive({
      name: '孙悟空',
      age: 500
    })
    return {
      user
    }
  }
})
</script>
