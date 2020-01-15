import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Board from "../views/Board.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/boards/:boardId",
      name: "board",
      props: true,
      component: Board
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/profile/:profileId",
      name: "profile",
      component: Profile
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
