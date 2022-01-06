<template>
  <div>
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
<style lang="sass" scoped>
button {
    min-width: 100px;
    padding: 5px;
}
</style>