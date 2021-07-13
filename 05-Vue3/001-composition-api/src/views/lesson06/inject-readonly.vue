<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 21:42:53
 * @Description  : inject子组件 provide用了readyonly修饰
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 22:01:08
-->
<template>
  <div>
    <h4>我是子组件</h4>
    <p>inject: {{ height }}</p>
    <input v-model="height" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  name: 'inject-component',
  setup(props) {
    const height = inject('height')
    return {
      height
    }
  }
})
</script>
