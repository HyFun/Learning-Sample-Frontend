<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 18:05:49
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 18:18:46
-->
<template>
  <div>
    <h4>我是子组件</h4>
    <input type="text" v-model="val" @input="onInput" />
  </div>
</template>
<script>
import { bus } from '../../util/event'
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    onInput(v) {
      bus.emit('event-input', v.target.value)
    }
  }
}
</script>
