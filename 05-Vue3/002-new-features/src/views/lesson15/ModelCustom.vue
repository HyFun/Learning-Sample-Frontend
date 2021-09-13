<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 18:30:13
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 18:42:44
-->
<template>
  <div>
    <hr />
    <h4>我是自定义的</h4>
    <input type="text" v-model="value" />
  </div>
</template>
<script>
export default {
  props: {
    message: String
  },
  computed: {
    value: {
      get() {
        return this.message
      },
      set(val) {
        this.$emit('update:message', val)
      }
    }
  }
}
</script>
