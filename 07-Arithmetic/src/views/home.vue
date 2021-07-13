<!--
 * @Author       : HyFun
 * @Date         : 2021-07-13 11:26:33
 * @Description  : 主页
 * @LastEditors  : HyFun
 * @LastEditTime : 2021-07-13 21:45:14
-->
<template>
  <div class="container">
    <el-card shadow="never">
      <el-table border :data="lessons">
        <el-table-column label="序号" width="80px">
          <template v-slot="{ $index }">
            <div>
              {{ $index + 1 }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="课程" prop="meta.title"></el-table-column>
        <el-table-column label="描述" prop="meta.description"></el-table-column>
        <el-table-column label="操作" width="200px">
          <template v-slot="{ $index }">
            <div>
              <router-link :to="`lesson${$index + 1}`">
                <el-button size="mini" type="text">详情</el-button>
              </router-link>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { routes } from '../router'
export default defineComponent({
  setup() {
    const lessons = computed(() => {
      return routes.filter((v) => !v.meta || !v.meta.hidden)
    })
    return {
      lessons
    }
  }
})
</script>
