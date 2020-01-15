import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Deck from "../views/Deck.vue";
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
      path: "/deck",
      name: "deck",
      component: Deck
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
