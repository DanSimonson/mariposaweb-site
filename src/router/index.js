import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Parahome from "@/components/Parahome";
import Cards from "@/components/Cards";
Vue.use(Router);

export default new Router({
  /*scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },*/
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/parahome/",
      name: "parahome",
      component: Parahome
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/contact/",
      name: "contact",
      component: Contact
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/cards/",
      name: "cards",
      component: Cards
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    }
  ]
});
