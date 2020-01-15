import axios from "axios";
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});
export default {
  actions: {
    async getPublicDecks({ commit, dispatch }, id) {
      try {
        let res = await api.get("decks/");
        commit("setResource", { name: "publicDecks", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getUserDecks({ commit, dispatch }, id) {
      try {
        let res = await api.get("decks/private/" + id);
        commit("setResource", { name: "userDecks", data: res.data });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
