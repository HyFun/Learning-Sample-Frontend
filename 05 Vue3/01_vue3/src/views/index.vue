<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 22:06:53
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-22 13:33:34
-->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in routes" :key="index">
        <router-link :to="item.path"> {{item.meta.title}} </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {routes} from '../router'
export default {
  computed: {
    routes() {
      return routes.find(v=>v.path==='/').children.filter(v=>v.meta&&!v.meta.hidden)
    }
  }
}
</script>
