import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import store from "./store";
import App from "./components/App.vue";

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

store.dispatch("getPinnedItems")
