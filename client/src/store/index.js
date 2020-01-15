import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import profileModule from "./ProfileModule";

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
    profileModule
  },
  state: {
    user: {},
    profile: {},
    boards: [],
    activeBoard: {},
    activeProfile: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setResource(state, payload) {
      state[payload.name] = payload.data;
    },
    setBoards(state, boards) {
      state.boards = boards;
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
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
        router.push({ name: "login" });
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
    },
    //#endregion

    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get("boards").then(res => {
        commit("setBoards", res.data);
      });
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post("boards", boardData).then(serverBoard => {
        dispatch("getBoards");
      });
    }
    //#endregion

    //#region -- LISTS --

    //#endregion
  }
});
