<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <Input></Input>
    <hr>
    <Counter />
    <hr>
    <h3>Image</h3>
    <img src="../../assets/jay.jpeg" alt="">
    
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
</style>
