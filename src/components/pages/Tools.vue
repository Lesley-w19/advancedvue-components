<template>
  <div>
    <h6 @click="showList()" class="m-3">
      {{ title }}
    </h6>

    <div
      class="logo-wrapper"
      v-for="(logo, index) in getImages"
      v-bind:key="index"
    >
      <img :src="logo" :alt="index" />
    </div>

    <div v-for="(l, index) in list" v-bind:key="index">
      <ul ref="toolList">
        <li>{{ l }}</li>
      </ul>
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

<style lang="scss">
@import "../../assets/styles.scss";
</style>
