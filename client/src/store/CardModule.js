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
    async addCard({ commit, dispatch }, payload) {
      try {
        let res = await api.post(
          "decks/" + payload.id + "/cards",
          payload.data
        );
        commit("addCard", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    setActiveCard({ commit, dispatch }, card) {
      commit("setResource", { name: "activeCard", data: card });
    },
    async editCard({ commit, dispatch }, payload) {
      try {
        let res = await api.put(
          "decks/" + payload.deckId + "/cards/" + payload.activeCard._id,
          payload.activeCard
        );
        commit("setResource", { name: "activeDeck", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCard({ commit, dispatch }, payload) {
      try {
        let res = await api.put("decks/" + payload.deckId + "/cards", payload);
        commit("deleteCard", payload);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
