<template>
  <component :is="routedComponent"></component>
</template>

<script>
import HomePage from "./pages/Home.vue";
import AboutPage from "./pages/About.vue";
import HooksPage from "./pages/Hooks.vue";
// import ExampleHk from "./pages/Examplehk.vue";
import Contact from "./pages/Contact.vue";
import NotFound from "./pages/NotFound.vue";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/hooks": HooksPage,
  // "/example": ExampleHk,
  "/contact": Contact,
};

export default {
  name: "AppRouter",
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      return routes[this.current] || NotFound;
    },
  },
};
</script>
