<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 21:42:53
 * @Description  : inject子组件 provide用了readyonly修饰 使用provide提供的方法进行修改
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 22:18:36
-->
<template>
  <div>
    <h4>我是子组件</h4>
    <p>inject: {{ height }}</p>
    <input :value="height" type="text" @input="onInput">
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'inject-component-change',
  setup(props) {
    interface F {
      (v:string):void
    }

    const height = inject('height')
    const change = inject<F>('change-height')
    return {
      height,
      onInput: (e:MouseEvent) => {
        const value = (e.target as HTMLInputElement).value
        if (change) {
          change(value)
        }
      }
    }
  }
})
</script>
