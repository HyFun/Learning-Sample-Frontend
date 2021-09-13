<!--
 * @Author       : HyFun
 * @Date         : 2021-09-13 14:55:01
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-13 15:11:17
-->
<template>
  <div>
    <h4>课时十一：nextTick</h4>
    <p>
      使用nextTick时，需要使用import的方式导入nextTick函数，这样能够最好的tree
      sharking
    </p>
  </div>
</template>
<script>
import { nextTick } from 'vue'
export default {
  name: 'Lesson11',
  created() {
    nextTick(() => {
      console.log(`nextTick`)
    })
  }
}
</script>
