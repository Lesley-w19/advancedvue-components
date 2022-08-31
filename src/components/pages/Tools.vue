<template>
  <div>
    <button @click="showList()">
      {{ title }}
    </button>

    <div class="logo-wrap" v-for="(logo, index) in getImages" v-bind:key="index">
      <img :src="logo" :alt="index" />
    </div>

    <div v-for="(l, index) in list" v-bind:key="index">
      <ul ref = "toolList">
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
  inject: ['getImages'],
};
</script>
c