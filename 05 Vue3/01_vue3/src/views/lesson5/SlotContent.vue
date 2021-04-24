<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-24 23:22:32
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-24 23:38:05
-->
<template>
  <button>
    <slot>
      我是一个按钮
    </slot>
  </button>
</template>

<style lang="scss" scoped>
.light {
    background-color: lightcyan;
}

.dark {
    background-color: black;
    color: #fff;
}
</style>
