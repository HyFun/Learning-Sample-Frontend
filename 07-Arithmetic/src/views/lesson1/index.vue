<!--
 * @Author       : HyFun
 * @Date         : 2021-07-13 13:11:35
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 13:48:13
-->
<template>
  <div class="container">
    <el-card shadow="never">
      <h3>lesson1</h3>
      <h4>源数据</h4>
      <div class="code">
        {{ JSON.stringify(tree, null, 4) }}
      </div>
      <h4>转换后</h4>
      <div class="code">{{ JSON.stringify(result, null, 4) }}</div>
      <p>耗时：{{ useTime }}ms</p>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import tree from './data'

export default defineComponent({
  setup() {
    const time = Date.now()
    const result: any[] = []
    function reduce(children: any[]) {
      children.forEach((v: any) => {
        result.push(v)
        const children = v.children
        v.children = []
        if (Array.isArray(children)) {
          reduce(children)
        }
      })
    }
    reduce(tree)
    const useTime: number = Date.now() - time
    return {
      tree,
      result,
      useTime
    }
  }
})
</script>
<style lang="scss" scoped>
.origin {
  white-space: pre;
  padding: 10px;
  max-height: 500px;
  overflow: auto;
}
</style>
