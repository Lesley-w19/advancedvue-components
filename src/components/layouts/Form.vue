<template>
  <div class="form-wraper">
    <h1>Fill the form:</h1>

    <form>
      <div id="header">
        <slot name="header"></slot>
      </div>

      <div id="fields">
        <slot name="fields"></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "  FormSetion",
};
</script>

<style></style>
