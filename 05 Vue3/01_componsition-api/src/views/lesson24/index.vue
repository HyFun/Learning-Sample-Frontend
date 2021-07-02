<!--
 * @Author       : heyongfeng
 * @Date         : 2021-07-03 01:48:59
 * @Description  : suspense组件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-03 02:04:44
-->
<template>
  <div>
    <h3>suspense组件</h3>
    <p>suspense组件主要是展示异步组件的时候，在异步组件展示出来之前，给予用户一个友好的体验。类似于loading效果</p>

    <suspense>
      <template #default>
        <!-- 注意：只允许使用单个节点 -->
        <div>
          <async-promise />
          <async-await />
        </div>
      </template>
      <template #fallback>
        <h3>Loading...</h3>
      </template>
    </suspense>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
// 组件
import AsyncPromise from './AsyncPromise.vue'
import AsyncAwait from './AsyncAwait.vue'
export default defineComponent({
  name: 'suspense-sample',
  components: {
    AsyncPromise,
    AsyncAwait
  }
})
</script>
