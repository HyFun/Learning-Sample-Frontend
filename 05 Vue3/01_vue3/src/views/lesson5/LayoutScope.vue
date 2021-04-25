<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-25 21:51:33
 * @Description  : 作用域插槽
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-25 22:04:20
-->
<template>
  <div>
    <slot :person="person" />
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <slot name="item" :item="item" :index="index">{{ item }}</slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      person: {
        name: '张三',
        age: 13
      },
      list: ['张三', '李四', '王五']
    }
  }
}
</script>
