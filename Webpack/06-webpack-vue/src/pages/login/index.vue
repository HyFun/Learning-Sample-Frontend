<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <Input></Input>
    <hr>
    <Counter />
    <hr>
    <h3>Image</h3>
    <img src="@/assets/images/jay.jpeg" alt="">
    <h3>css渐变</h3>
    <div class="gradient"></div>
    <h3>字体图标</h3>
    <i class="iconfont icon-aixin"></i>
    <i class="iconfont icon-bianji"></i>
    <i class="iconfont icon-Dyanjing"></i>
    <i class="iconfont icon-caidan"></i>
  </div>
</template>
<script>
import Input from "@/components/Input/index.vue";
import Counter from '@/components/Counter/index.vue'

export default {
  name: "Login",
  components: {
    Input,
    Counter
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  background: #f5f5f5;
  padding: 20px;
}
.gradient {
  width: 200px;
  height: 100px;
  background: linear-gradient(90deg, pink, orange);
}

.iconfont {
  color: orange;
}
</style>
