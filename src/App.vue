<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <div class="nav-wrapper bg-primary">
      <ul class="mr-auto">
        <li class="active">
          <a class="" href="#" @click="goToPage('/')">Home</a>
        </li>
        <li class="">
          <a class="" href="#" @click="goToPage('/about')">About</a>
        </li>
        <li class="">
          <a class="" href="#" @click="goToPage('/hooks')">Hooks</a>
        </li>
        <li class="">
          <a class="" href="#" @click="goToPage('/example')">Example</a>
        </li>
        <li class="">
          <a class="" href="#" @click="goToPage('/contact')">Contact</a>
        </li>
      </ul>
    </div>

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
  provide: function () {
    return {
      getImages: this.imgs,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/styles.scss";
</style>
