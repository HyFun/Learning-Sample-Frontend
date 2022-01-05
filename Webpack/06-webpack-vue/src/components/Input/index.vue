<template>
  <div>
    <input type="text" v-model="message" />
    <p>message: {{ message }}</p>
  </div>
</template>
<script>
export default {
  name: 'InputComponent',
  data() {
    return {
      message: ''
    }
  }
}
</script>
<style lang="scss" scoped></style>
