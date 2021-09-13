<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 18:30:13
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 18:39:49
-->
<template>
  <div>
    <hr />
    <h4>我是默认的</h4>
    <input type="text" v-model="value" />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: String
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  }
}
</script>
