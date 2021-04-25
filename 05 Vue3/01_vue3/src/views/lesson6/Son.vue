<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 20:37:50
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 20:40:43
-->
<template>
  <div>
    我是儿子
  </div>
</template>
<script>
export default {
  data() {
    return {
    //   msg: 'Hello'
    }
  },
  beforeCreate() {
    console.log('beforeCreate2')
  },
  created() {
    console.log('created2')
  },
  beforeMount() {
    console.log('beforeMount2')
  },
  mounted() {
    console.log('mounted2')
  },
  beforeUpdate() {
    console.log('beforeUpdate2')
  },
  updated() {
    console.log('updated2')
  },
  activated() {
    console.log('activated2')
  },
  deactivated() {
    console.log('deactivated2')
  },
  beforeUnmount() {
    console.log('beforeUnmount2')
  },
  unmounted() {
    console.log('unmounted2')
  }
}
</script>

