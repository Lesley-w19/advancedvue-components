<template>
  <div class="px-5">
    <h3 class="text-center">Home page</h3>

    <div class="dynamic-components px-5">
      <button @click="customComponent = 'BlogOne'" class="btn btn-primary mx-2">
        Blog One
      </button>
      <button @click="customComponent = 'BlogTwo'" class="btn btn-primary mx-2">
        Blog Two
      </button>
      <button
        @click="
          customComponent = 'BlogThree';
          active = true;
        "
        class="btn btn-primary mx-2"
      >
        Blog Three
      </button>
      <hr />

      <!-- Binding the current component to the property  -->
      <component :is="customComponent"></component>
    </div>
  </div>
</template>

<script>
import BlogOne from "./blogs/BlogOne.vue";
import BlogTwo from "./blogs/BlogTwo.vue";
import BlogThree from "./blogs/BlogThree.vue";
export default {
  name: "HomePage",
  data() {
    return {
      customComponent: "BlogOne",
    };
  },
  components: {
    BlogOne: BlogOne,
    BlogTwo: BlogTwo,
    BlogThree: BlogThree,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/styles.scss";
</style>
