import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../components/Registration/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
