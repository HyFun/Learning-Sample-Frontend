<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 17:54:24
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 18:41:40
-->
<template>
  <div>
    <h4>课时十五：v-model改变</h4>
    <h4>我是父组件</h4>
    <p>Message: {{ message }}</p>
    <ModelDefault v-model="message" />
    <ModelCustom v-model:message="message" />
  </div>
</template>
<script>
import ModelDefault from './ModelDefault.vue'
import ModelCustom from './ModelCustom.vue'
export default {
  name: 'Lesson15',
  components: {
    ModelDefault,
    ModelCustom
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>
