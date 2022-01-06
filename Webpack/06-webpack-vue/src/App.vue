<template>
  <div class="app">
    {{ message }}
    <InputComponent />
    <hr>
    <Counter />
    <router-view></router-view>
    </div>
</template>
<script>
import InputComponent from '@/components/Input/index.vue'
import Counter from '@/components/Counter/index.vue'

export default {
  name: "App",
  components: {
    InputComponent,
    Counter
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>
<style lang="sass" scoped>
.app {
    font-size: 21px;
    background-color: purple;
    color: white;
}
</style>
