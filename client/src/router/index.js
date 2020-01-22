import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

import Profile from "../views/Profile.vue";
import DeckDetails from "../views/DeckDetails";
import Lobby from "../views/Lobby";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    // {
    //   path: "/deck",
    //   name: "deck",
    //   component: Deck
    // },

    {
      path: "/profile/:profileId",
      name: "profile",
      component: Profile
    },
    {
      path: "/deck/:id",
      name: "deckDetails",
      component: DeckDetails
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/lobby/:id",
      name: "lobby",
      component: Lobby
    }
  ]
});
