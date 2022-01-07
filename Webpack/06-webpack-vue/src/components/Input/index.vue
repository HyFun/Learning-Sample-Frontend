<template>
  <div>
    <h3>v-model</h3>
    <input type="text" v-model="message" />
    <p>message: {{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'InputComponent',
  data() {
    return {
      message: 'Hello World!'
    }
  }
}
</script>
<style lang="scss" scoped></style>
