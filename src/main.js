// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
Vue.component("app-footer", AppFooter);
Vue.component("app-header", AppHeader);
import VueDisqus from "vue-disqus";

Vue.use(VueDisqus);
Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
