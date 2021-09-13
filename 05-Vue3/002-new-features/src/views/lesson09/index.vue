<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 14:08:24
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 14:19:15
-->
<template>
  <div>
    <h4>课时九：函数式组件</h4>
    <Func>Hello Vue3!</Func>
  </div>
</template>
<script>
import Func from './Hello'
export default {
  name: 'Lesson09',
  components: {
    Func
  }
}
</script>
