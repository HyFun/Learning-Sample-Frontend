<!--
 * @Author       : heyongfeng
 * @Date         : 2021-07-03 01:23:22
 * @Description  : teleport标签使用
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-07-03 01:32:53
-->
<template>
  <div>
    <h3>teleport标签使用</h3>
    <hr>
    <button @click="show=true">
      打开对话框
    </button>
    <teleport to="body">
      <div v-if="show" class="modal">
        <div class="modal_content">
          <h4>我是一个对话框</h4>
          <button @click="show=false">
            关闭
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'use-teleport',
  setup(props) {
    const show = ref(false)
    return {
      show
    }
  }
})
</script>

<style scoped lang="scss">
.modal {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal_content {
        width: 200px;
        padding: 20px;
        background-color: #fff;
        border-radius: 4px;
    }
}
</style>
