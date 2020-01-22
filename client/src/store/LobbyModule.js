import axios from "axios";
import router from "../router";
let base = window.location.host.includes("localhost:")
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
        commit("setResource", { name: "lobby", data: res.data });
        router.push({
          name: "lobby",
          params: { id: res.data._id }
        });
      } catch (error) {
        console.error(error);
      }
    },

    async saveLobby({ commit, dispatch }, lobby) {
      try {
        let res = await api.put("lobby/" + lobby._id, lobby)
      } catch (error) {
        console.error(error);
      }
    },

    async getLobbyById({ commit, dispatch }, lobbyId) {
      try {
        let res = await api.get("lobby/" + lobbyId);

        commit("setResource", { name: "lobby", data: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
