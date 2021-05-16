<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-27 22:04:37
 * @Description  : provider和inject
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-04 01:14:32
-->
<template>
  <div>
    <h3>我是父组件</h3>
    <input v-model="name" type="text">
    {{ name }}
    <hr>
    <Sub />
  </div>
</template>
<script>
import Sub from './Sub'
export default {
  name: 'Lesson8',
  components: {
    Sub
  },
  provide() {
    return {
      a: {
        name: this.name
      }
    }
  },
  data() {
    return {
      name: '我是名字'
    }
  }
}
</script>
