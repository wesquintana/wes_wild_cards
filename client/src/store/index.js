import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import profileModule from "./ProfileModule";
import deckModule from "./DeckModule";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    profileModule,
    deckModule
  },
  state: {
    user: {},
    profile: {},
    activeProfile: {},
    userDecks: [],
    publicDecks: [],
    activeDeck: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setResource(state, payload) {
      state[payload.name] = payload.data;
    },
    resetState(state) {
      state.user = {};
      state.profile = {};
      state.activeProfile = {};
      state.userDecks = [];
      state.activeDeck = {};
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.go(0);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.go(0);
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
      } catch (e) {
        console.warn(e.message);
      }
    },
    async getResourceById({ commit, dispatch }, payload) {
      try {
        let res = await api.get(payload.name + "/" + payload.id);
        commit("setResource", { name: payload.name, data: res.data });
      } catch (error) {
        console.error(error);
      }
    }
    //#endregion

    //#region -- BOARDS --

    //#endregion

    //#region -- LISTS --

    //#endregion
  }
});
