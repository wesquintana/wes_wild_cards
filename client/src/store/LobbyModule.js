import axios from "axios";
import router from "../router";
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = axios.create({
  baseURL: base + "api/",
  // timeout: 3000,
  withCredentials: true
});

export default {
  actions: {
    async createLobby({ commit, dispatch }, deckInfo) {
      try {
        let res = await api.post("lobby", { deck: deckInfo });
        commit("addLobby", res.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
