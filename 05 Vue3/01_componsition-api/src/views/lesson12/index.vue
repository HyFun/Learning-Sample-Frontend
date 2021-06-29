<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-16 22:26:37
 * @Description  : toRefs使用
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-16 22:33:41
-->
<template>
  <div>
    <h3>toRefs使用</h3>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>
      <button @click="change">
        ++
      </button>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      name: '自来也',
      age: 18
    })
    return {
      ...toRefs(state),
      change: () => {
        state.age++
      }
    }
  }
})
</script>
