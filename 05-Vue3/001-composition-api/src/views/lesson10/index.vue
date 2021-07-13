<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-15 21:22:45
 * @Description  : 声明周期
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-15 21:44:24
-->
<template>
  <div>
    <h3>声明周期</h3>
    <button @click="isShow=!isShow">
      切换显示
    </button>
    <hr>
    <child v-if="isShow" />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
// 组件
import Child from './Child.vue'
export default defineComponent({
  name: 'lifecycle',
  components: {
    Child
  },
  setup(props) {
    //
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>
