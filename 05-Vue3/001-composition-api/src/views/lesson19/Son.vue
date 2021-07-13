<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-28 21:48:41
 * @Description  : son
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-28 21:52:52
-->
<template>
  <h4>我是子组件</h4>
  <p>person：{{ person }}</p>
  <p>color：{{ color }}</p>
  <grand-son />
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/runtime-core'
import GrandSon from './GrandSon.vue'
export default defineComponent({
  name: 'son',
  components: {
    GrandSon
  },
  setup(props) {
    const person = inject('person')
    const color = inject('color')

    return {
      person,
      color
    }
  }
})
</script>
