<style lang="scss">
@import "../../assets/styles.scss";
</style>

<template>
  <div class="px-5">
    <!-- <h3 class="text-center">Home page</h3> -->

    <div class="hero-wrapper"></div>

    <div class="dynamic-components px-5 my-5">
      <h3 class="my-3 text-success">Articles</h3>
      <button @click="customComponent = 'BlogOne'" class="btn btn-primary mx-2">
        Javascript
      </button>
      <button @click="customComponent = 'BlogTwo'" class="btn btn-primary mx-2">
        Development
      </button>
      <button
        @click="
          customComponent = 'BlogThree';
          active = true;
        "
        class="btn btn-primary mx-2"
      >
        CSS
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
      imglink:
        "https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
