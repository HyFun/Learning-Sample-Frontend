<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 16:20:16
 * @Description  : setup 参数
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:32:54
-->
<template>
  <div>
    setup 参数
    <h3>我是父组件</h3>
    <hr>
    <component01
      :name="subValue"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Component01 from './com01.vue'
export default defineComponent({
  name: 'lesson04',
  components: {
    Component01
  },
  setup(props) {
    // 
    const subValue = ref('hello vue3!')
    return {
      subValue
    }
  }
})
</script>
