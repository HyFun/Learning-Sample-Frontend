<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-15 21:55:15
 * @Description  : 自定义hooks函数
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-15 21:56:30
-->
<template>
  <div>
    <h3>自定义hooks函数</h3>
    <h4>1. 通过useMountedPoint获取点击屏幕的坐标</h4>
    <p>
      x: {{ x }}
      <br>
      y: {{ y }}
    </p>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import useMountedPoint from './useMountedPoint'
export default defineComponent({
  name: 'hooks',
  setup(props) {
    const { x, y } = useMountedPoint()
    return {
      x, y
    }
  }
})
</script>
