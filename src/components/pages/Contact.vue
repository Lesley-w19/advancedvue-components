<template>
  <Form>
    <template #header>
      <h1>Slot header</h1>
    </template>
    <template v-slot:fields>
      <div>
        <label for="">Name</label>
        <input type="text" />
      </div>
    </template>
  </Form>
</template>

<script>
import Form from "../layouts/Form.vue";
export default {
  name: "ContactSection",
  components: {
    Form,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles.scss";
</style>
