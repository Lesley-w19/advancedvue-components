<template>
  <div class="about-wrapper">
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
    <div class="card-wrapper px-2 py-5">
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Content creation</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Graphic Design</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Read more</a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Software engineering</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Read more</a>
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
