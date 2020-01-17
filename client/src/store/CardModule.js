import axios from "axios";
import router from "../router";
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
    setActiveCard({ commit, dispatch }, card) {
      commit("setResource", { name: "activeCard", data: card });
    }
  }
};
