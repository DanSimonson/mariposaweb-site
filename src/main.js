// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueDisqus from "vue-disqus";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Navbar from "./components/Navbar.vue";
import Navigation from "./components/Navigation.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import Parahome from "./components/Parahome.vue";

Vue.component("Navigation", Navigation);
Vue.component("nav-bar", Navbar);
Vue.component("para-home", Parahome);
Vue.component("app-footer", AppFooter);
Vue.component("app-header", AppHeader);

/*import jQuery from "jquery";
global.jQuery = jQuery;
//global.jQuery = $;*/
Vue.use(Vuetify, {
  iconfont: "fa" // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueDisqus);
/*
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";*/
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
//Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
