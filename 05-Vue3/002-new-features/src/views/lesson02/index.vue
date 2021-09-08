<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:30:28
 * @Description  : 课时二
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 17:41:10
-->
<template>
  <div>
    <h3>课时二：异步组件</h3>
    <p>异步组件需要使用：defineAsyncComponent()方法进行声明引入</p>
    <AsyncComponent />
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'Lesson2',
  components: {
    AsyncComponent: defineAsyncComponent(() => import('./AsyncComponent.vue'))
  }
}
</script>
