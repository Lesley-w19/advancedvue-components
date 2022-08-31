<template>
  <div claas="navbar-container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "MainSection",
  components: {
    VLink,
  },
};
</script>
<style scoped>
.navbar-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 30px;
  background: #f9f7f5;
}
</style>
