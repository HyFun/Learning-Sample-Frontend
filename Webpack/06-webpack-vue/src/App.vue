<template>
  <div class="app">
    {{ message }}
    <InputComponent />
    </div>
</template>
<script>
import InputComponent from '@/components/Input/index.vue'


export default {
  name: "App",
  components: {
    InputComponent
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
