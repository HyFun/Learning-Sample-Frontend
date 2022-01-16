<template>
  <div>
    <h3>Counter</h3>
    <p>count: {{ count }}</p>
    <button @click="count--">-</button>
    <button @click="count++">+</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
button {
  min-width: 25px;
}
</style>