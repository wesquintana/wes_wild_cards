import axios from "axios";
let base = window.location.host.includes("localhost:")
  ? "//localhost:3000/"
  : "/";

let api = axios.create({
  baseURL: base,
  // timeout: 3000,
  withCredentials: true
});
export default {
  actions: {
    async getPersonalProfileByUserId({ commit, dispatch }, id) {
      try {
        let res = await api.get("account/" + id + "/profile");
        commit("setResource", { name: "activeProfile", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async editProfile({ commit, dispatch }, profileData) {
      try {
        let res = await api.put("api/profile/" + profileData.id, profileData);
        if (res.hasOwnProperty("data")) {
          commit("setResource", { name: "profile", data: res.data });
          commit("setResource", { name: "activeProfile", data: res.data });
        }
      } catch (error) { }
    },
    async getPublicDecksByUserId({ commit, dispatch }, id) {
      try {
        let res = await api.get("api/decks/public/" + id);
        commit("setResource", { name: "profileDecks", data: res.data });
      } catch (error) {
        console.error(error);
      }
    },
    async getProfileById({ commit, dispatch }, id) {
      try {
        let res = await api.get("api/profile/" + id);
        commit("setResource", { name: "profile", data: res.data });
        dispatch("getPublicDecksByUserId", res.data.userId);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
