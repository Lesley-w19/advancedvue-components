<template>
  <Form>
    <template #header>
      <h1 class="px-0">Sign Up</h1>
    </template>
    <template v-slot:fields>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1">Full name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter ful name"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    </template>
    <template #button>
      <button type="submit" class="btn btn-primary my-2">Sign Up</button>
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
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/styles.scss";
</style>
