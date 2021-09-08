<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:58:09
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 18:20:05
-->
<template>
  <div>
    <h3>课时三：$attrs包含class&style</h3>
    <p>$attr可以传style、class等属性，也可以传事件。其$listeners被移除，被$attrs取代</p>
    <p>message: {{ msg }}</p>
    <hr />
    <ElInput
      type="password"
      style="height: 40px"
      class="inputClass"
      @input="onInput"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: 'Lesson3',
  components: {
    ElInput: defineAsyncComponent(() => import('./SubComponent.vue'))
  },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    onInput(e) {
      this.msg = e.target.value
    }
  }
}
</script>
<style lang="scss">
.inputClass {
  border: 1px solid red;
  background-color: #ccc;
}
</style>
