import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import moment from "moment";
import Loading from "@/components/Loading/Loading.vue";

import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
Vue.component("Loading", Loading);

Vue.filter("formatandoData", (data) => {
  return moment(
    new Date(data),
    ["ddd MMM DD YYYY HH:mm:ss Z+HHmm"],
    "pt-br",
    true
  ).fromNow();
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
