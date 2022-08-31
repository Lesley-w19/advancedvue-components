<template>
  <div>
    <h3>Hooks implementation</h3>
    <div ref="created-example">{{ showinfoComputed }}</div>
    <button ref="button-updat-element">{{ total }}</button>
  </div>
</template>

<script>
import ExampleHk from "../pages/Examplehk.vue";
export default {
  name: "HooksPage",
  data() {
    return {
      name: "Hooks Component",
      shoppinglist: ["Books", "Groceries", "pens", "toiletries"],
      total: 500,
      destroyName:
        "This represents a name that will leak memory if not cleaned up.",
    };
  },

  computed: {
    showinfoComputed() {
      return this.name + " " + this.shoppinglist;
    },
  },
  beforeCreate() {
    console.log(
      "This can be run, to showinfoComputed has not yet been created"
    );
  },
  // created() {
  //   console.log("At this point, this.data> is now reactive");
  //   this.name = "Hooks components created.....";
  // },
  beforeMount() {
    console.log(
      `runs right before the initial render happens and after the template or render functions, vm.$el has not been created yet.`
    );
  },
  mounted() {
    console.log(
      `Allows full access to the reactive component,hence,the  vm.$el has been created and el has been replaced.`
    );
    console.log(this.$el.textContent); // Example component.
  },
  created() {
    setTimeout(() => {
      this.total++;
    }, 1000);
  },

  beforeUpdate() {
    console.log(
      `At this point, Virtual DOM has not re-rendered or patched yet.`
    );
    // Logs the total value every second, before the DOM updates.
    console.log(this.total);
  },
  //runs after data changes on your component and the DOM re-renders.

  // updated() {
  //   console.log(`At this point, Virtual DOM has re-rendered and patched.`);
  //   // Stop after a second
  //   console.log(+this.$refs["button-updat-element"].textContent === this.total);
  // },
  beforeDestroy() {
    console.log(
      `At this point, watchers, child components, and event listeners have not been teared down yet.`
    );
    // Perform the teardown procedure for destroyName.
    // (In this case, effectively nothing)
    this.destroyName = null;
    delete this.destroyName;
  },
  destroyed() {
    console.log(
      `At this point, watchers, child components, and event listeners have been torn down.`
    );
    console.log(this);
    ExampleHk.informService("Component has been destroyed.");
  },
};
</script>
<style lang="scss"></style>
