import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    }
  ]
});
