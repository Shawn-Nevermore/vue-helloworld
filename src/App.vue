<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
    <list />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HelloEarth from "./components/HelloEarth.vue";
import list from "./components/list.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    HelloEarth,
    list
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
