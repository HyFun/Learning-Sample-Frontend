<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 17:59:10
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 18:18:09
-->
<template>
  <div>
    <h4>课时七：移除$on()、$off()、$once()事件总线方法</h4>
    <p>
      我们从实例中完全移除了 $on、$off 和 $once 方法。$emit 仍然包含于现有的 API
      中，因为它用于触发由父组件声明式添加的事件处理函数。
    </p>
    <p>message: {{ message }}</p>
    <hr />
    <SubComponent />
  </div>
</template>
<script>
import SubComponent from './SubComponent.vue'
import { bus } from '../../util/event'
export default {
  name: 'Lesson7',
  components: {
    SubComponent
  },
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    bus.on('event-input', v => {
      this.message = v
    })
  },
  beforeUnmount() {
    bus.off('event-input')
  }
}
</script>
