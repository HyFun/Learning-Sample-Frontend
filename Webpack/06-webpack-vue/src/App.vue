<template>
  <div class="app">{{ message }}</div>
</template>
<script>
export default {
  name: "App",
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
