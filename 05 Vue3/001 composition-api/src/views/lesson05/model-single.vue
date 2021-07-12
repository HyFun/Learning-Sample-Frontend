<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 17:23:09
 * @Description  : 单个model
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 17:37:21
-->
<template>
  <h3>我是子组件</h3>
  <p>value: {{ modelValue }}</p>
  <input type="text" :value="modelValue" @input="onInput">
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'model-single',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    return {
      onInput: (e:any) => {
        const value = e.target.value
        emit('update:modelValue', value)
      }
    }
  }
})
</script>
