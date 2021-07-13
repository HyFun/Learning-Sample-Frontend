<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 16:23:10
 * @Description  : 组件01
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:19:26
-->
<template>
  <h3>我是子组件</h3>
  <p>子组件prop-name: {{ nameString }}</p>
</template>
<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
export default defineComponent({
  name: 'lesson04-component01',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { name } = toRefs(props)
    const nameString = computed(() => {
      return name.value
    })
    return {
      nameString
    }
  }
})
</script>
