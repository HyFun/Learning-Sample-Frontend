<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 20:37:45
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 20:40:18
-->
<template>
  <div>
    我是父亲
    <Son />
  </div>
</template>
<script>
import Son from './Son'
export default {
  components: {
    Son
  },
  data() {
    return {
    //   msg: 'Hello'
    }
  },
  beforeCreate() {
    console.log('beforeCreate1')
  },
  created() {
    console.log('created1')
  },
  beforeMount() {
    console.log('beforeMount1')
  },
  mounted() {
    console.log('mounted1')
  },
  beforeUpdate() {
    console.log('beforeUpdate1')
  },
  updated() {
    console.log('updated1')
  },
  activated() {
    console.log('activated1')
  },
  deactivated() {
    console.log('deactivated1')
  },
  beforeUnmount() {
    console.log('beforeUnmount1')
  },
  unmounted() {
    console.log('unmounted1')
  }
}
</script>

