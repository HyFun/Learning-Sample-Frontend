<!--
 * @Author       : HyFun
 * @Date         : 2021-09-08 17:10:17
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-09-08 17:32:33
-->
<template>
  <div>
    <h3>Vue3.x 新特性</h3>
    <ul>
      <li v-for="item in routes" :key="item.path">
        <router-link :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { routes } from '../router'
export default {
  name: 'Home',
  computed: {
    routes() {
      return routes.filter((v) => v.path !== '/')
    }
  }
}
</script>
