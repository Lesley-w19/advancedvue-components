<template>
  <div>
    <h6 @click="showList()" class="m-3">
      {{ title }}
    </h6>

    <div class="logo-wrapper">
      <div v-for="(logo, index) in getImages" v-bind:key="index">
        <img :src="logo" :alt="index" />
      </div>
    </div>
    <div class="logo-wrapper">
      <div v-for="(l, index) in list" v-bind:key="index">
        <ul ref="toolList">
          <li>{{ l }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolsSection",
  data() {
    return {
      title: "Your logos",

      list: this.$root.list,
      section: this.$parent.sections,
    };
  },
  methods: {
    showList() {
      console.log(this.$root.list);
    },
  },
  inject: ["getImages"],
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background: #d45806 !important;
  img {
    width: 400px;
    height: 300px;
  }
}
</style>
