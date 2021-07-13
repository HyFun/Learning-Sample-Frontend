<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-25 23:39:39
 * @Description  : provide和inject
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-28 21:51:00
-->
<template>
  <div>
    <h3>provide和inject</h3>
    <h4>父组件</h4>
    <p>person：{{ person }}</p>
    <p>color：{{ color }}</p>
    <son />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide, reactive, ref } from '@vue/runtime-core'

import Son from './Son.vue'
export default defineComponent({
  name: 'provide',
  components: {
    Son
  },
  setup(props) {
    const person = reactive({
      name: '张三',
      age: 20
    })
    const color = ref<string>('red')
    provide('person', person)
    provide('color', color)
    return {
      person,
      color
    }
  }
})
</script>
