<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 17:43:12
 * @Description  : 多个v-model实现
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:54:43
-->
<template>
  <div>
    <h3>我是子组件</h3>
    <p>name: {{ name }}</p>
    <input type="text" :value="name" @input="onInputName">
    <p>age: {{ age }}</p>
    <input type="text" :value="age" @input="onInputAge">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'model-multiple',
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    //
    return {
      onInputName: (e: KeyboardEvent) => {
        emit('update:name', (e.target as HTMLInputElement).value)
      },
      onInputAge: (e: KeyboardEvent) => {
        emit('update:age', (e.target as HTMLInputElement).value)
      }
    }
  }
})
</script>
