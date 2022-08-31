<template>
  <div claas="about-wrapper px-5 w-75 mx-auto">
    <h3>About Page</h3>

    <div class="logos-wrapper">
      <div>
        <button @click="display = true" class="btn btn-primary">
          Show Logos
        </button>
        <div class="img-logo" v-if="display">
          <Tools ref="toollist" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      display: this.$parent.display,
      sections: ["home", "about", "contact", "blogs"],
      // toolList: this.$ref.toolList,
    };
  },
  components: {
    Tools: () => import("./Tools.vue"),
  },
};
</script>
<style lang="scss">
@import "../../assets/styles.scss";
</style>
