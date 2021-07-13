<!--
 * @Author       : heyongfeng
 * @Date         : 2021-06-01 11:23:10
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-06-01 14:58:39
-->
<template>
  <div>
    <h1>Vue3.0</h1>
    <ul>
      <li v-for="(item,index) in routeList" :key="index">
        <router-link :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
// 数据
import { routes } from '../router'
import { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'home',
  computed: {
    routeList(): Array<RouteRecordRaw> {
      const parent = routes.find(v => v.path === '/')
      if (parent?.children) {
        return parent.children.filter(v => v.path !== '/')
      }
      return []
    }
  }
})
</script>
