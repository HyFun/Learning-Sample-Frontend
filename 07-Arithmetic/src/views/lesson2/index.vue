<!--
 * @Author       : HyFun
 * @Date         : 2021-07-13 13:11:35
 * @Description  : 
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 21:47:10
-->
<template>
  <div class="container">
    <el-card shadow="never">
      <h3>lesson2</h3>
      <h4>源数据</h4>
      <div class="code">
        {{ JSON.stringify(list, null, 4) }}
      </div>
      <h4>转换后</h4>
      <div class="code">{{ JSON.stringify(result, null, 4) }}</div>
      <p>耗时：{{ useTime }}ms</p>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import list from './data'

export default defineComponent({
  setup() {
    const time = Date.now()
    const result: any[] = []
    /**
     * 方法一：递归
     * 优点：简单易懂
     * 缺点：性能差，每次递归方法都要遍历一次原数组  时间复杂度 O(2^n)
     *
     * 耗时：10ms
     */
    // {
    //   const toTree = (data: any[], pid: any[]) => {
    //     const res: any[] = []
    //     for (let i = 0; i < data.length; i++) {
    //       const item = data[i]
    //       if (pid.includes(item.parentId)) {
    //         item.children = toTree(data, [item.id])
    //         res.push(item)
    //       }
    //     }
    //     return res
    //   }
    //   result.push(...toTree(list, ['', null, undefined]))
    // }

    // 2. find
    {
      const toTree = (list: any[]) => {
        const res: any[] = []
        list.forEach((v: any) => {
          const parent = list.find((p: any) => p.id === v.parentId)
          if (parent) {
            Array.isArray(parent.children)
              ? parent.children.push(v)
              : (parent.children = [v])
          } else {
            res.push(v)
          }
        })
        return res
      }

      result.push(...toTree(list))
    }

    /**
     * 方法二：map
     * 1. 先将list转化为map
     * 2. 从map中查找是否存在父级
     *
     * 时间复杂度 O(2n)
     * 耗时：3ms
     */
    // {
    //   const map: { [name: string]: any } = list.reduce(
    //     (res: { [name: string]: any }, item) => {
    //       res[item.id] = item
    //       return res
    //     },
    //     {}
    //   )
    //   for (let i = 0; i < list.length; i++) {
    //     const item = list[i]
    //     if (item.parentId && map[item.parentId]) {
    //       if (!Array.isArray(map[item.parentId].children)) {
    //         map[item.parentId].children = []
    //       }
    //       map[item.parentId].children.push(item)
    //     } else {
    //       result.push(item)
    //     }
    //   }
    // }

    console.log(result)
    const useTime: number = Date.now() - time
    return {
      list,
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
