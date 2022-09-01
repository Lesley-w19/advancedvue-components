<template>
  <div class="form-wraper">
    <div>
      <img :src="link" alt="form-pic" />
    </div>

    <div>
      <!-- <h1>Fill the form:</h1> -->

      <form>
        <div id="header">
          <slot name="header"></slot>
        </div>

        <div id="fields">
          <slot name="fields"></slot>
        </div>
        <div id="button-div">
          <slot name="button"></slot>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "  FormSetion",

  data() {
    return {
      link: "https://images.pexels.com/photos/6373486/pexels-photo-6373486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
  },

  mixins: [
    //
  ],
  computed: {},
  methods: { 
    //you define your functions... trigger/used with events
},
  watchers: {
    //case example : banks and their branches
  },
  components: {},
  filters: {},
};
</script>

<style></style>
