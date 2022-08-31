import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  data: {
    list: ["home", "about", "contact", "blogs"],
    images: [
      "https://images.pexels.com/photos/13189931/pexels-photo-13189931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/12699167/pexels-photo-12699167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/13085571/pexels-photo-13085571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
  },
  render: (h) => h(App),
}).$mount("#app");
