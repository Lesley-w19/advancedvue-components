<template>
  <component :is="routedComponent"></component>
</template>

<script>
import HomePage from "./pages/Home.vue";
import AboutPage from "./pages/About.vue";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
};

export default {
  name: "AppRouter",
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    },
  },
};
</script>
