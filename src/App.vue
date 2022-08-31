<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="goToPage('/about')">Go to About</button>
    <button @click="goToPage('/')">Go to Home</button>
    <app-router></app-router>
  </div>
</template>

<script>
import AppRouter from "./components/Router.vue";
export default {
  name: "App",
  data() {
    return {
      imgs: this.$root.images,
    };
  },
  components: {
    AppRouter,
  },
  methods: {
    goToPage(route) {
      window.location = route;
    },
  },
  provide: function(){
    return {
      getImages: this.imgs
    }
  }
};
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
