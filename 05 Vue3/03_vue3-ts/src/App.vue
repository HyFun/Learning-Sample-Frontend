<!--
 * @Author       : heyongfeng
 * @Date         : 2021-05-09 11:39:32
 * @Description  : 
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-05-09 12:19:47
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Home />
  <hr>
  <Compontion />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './components/Home.vue';
import Compontion from './components/Compontion.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
    Compontion
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
