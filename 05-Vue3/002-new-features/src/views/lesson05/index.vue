<!--
 * @Author       : HyFun
 * @Date         : 2021-09-09 13:36:35
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-09 13:42:11
-->
<template>
  <div>
    <h4>课时五：Data选项</h4>
    <p>data 选项已标准化为只接受返回 object 的 function</p>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'Lesson05',
  data: function () {
    return {
      msg: '我是data中的message'
    }
  }
}
</script>
