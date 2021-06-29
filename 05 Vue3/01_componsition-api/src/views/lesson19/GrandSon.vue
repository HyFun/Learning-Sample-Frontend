<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-28 21:48:41
 * @Description  : 孙子组件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-28 21:55:54
-->
<template>
  <h4>我是孙子组件</h4>
  <input v-model="person.name" type="text">
  <input v-model="person.age" type="text">
  <br>
  <button @click="changeColor('red')">
    red
  </button>
  <button @click="changeColor('blue')">
    blue
  </button>
  <button @click="changeColor('green')">
    green
  </button>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'son',
  setup(props) {
    const person = inject('person')
    const color = inject<Ref<string>>('color')

    return {
      person,
      color,
      changeColor: (c:string) => {
        color!.value = c
      }
    }
  }
})
</script>
