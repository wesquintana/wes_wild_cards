import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import profileModule from "./ProfileModule";
import deckModule from "./DeckModule";
import cardModule from "./CardModule";
import lobbyModule from "./LobbyModule";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  // timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    profileModule,
    deckModule,
    cardModule,
    lobbyModule
  },
  state: {
    user: {},
    profile: {},
    activeProfile: {},
    userDecks: [],
    publicDecks: [],
    activeDeck: {},
    profileDecks: [],
    activeCard: {},
    lobby: []
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
      state.profileDecks = [];
    },
    addUserDeck(state, payload) {
      state.userDecks.push(payload);
    },
    addCard(state, changedDeck) {
      state.activeDeck = changedDeck;
      // Vue.set(state.activeDeck, "cards", [...state.activeDeck.cards, card]);
    },
    addLobby(state, payload) {
      state.lobby.push(payload);
    },
    clearActiveDeck(state) {
      state.activeDeck = {};
    },
    deleteCard(state, payload) {
      let index = state.activeDeck.cards.findIndex(
        card => card._id == payload.cardId
      );
      state.activeCard = {};
      state.activeDeck.cards.splice(index, 1);
    },
    moveCard(state, { fromZone, toZone, cardIndex }) {
      let cardToMove = fromZone.splice(cardIndex, 1)[0];
      toZone.push(cardToMove);
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
        router.go(0);
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
