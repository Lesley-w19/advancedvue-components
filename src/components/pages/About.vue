<template>
  <div claas="about-wrapper">
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
      display: false,
      sections: ["home", "about", "contact", "blogs"],
      toolList: this.$ref.toolList,
    };
  },
  components: {
    Tools: () => import("./Tools.vue"),
  },
};
</script>
<style lang="scss"></style>
