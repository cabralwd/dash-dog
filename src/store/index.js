import Vue from "vue";
import Vuex from "vuex";
import { api } from "./services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    nome: "Alfredo",
    loaded: true,
    animals: null,
    appointments: null,
  },
  mutations: {
    UPDATE_ANIMALS(state, payload) {
      state.animals = payload;
    },
    UPDATE_APPOINTMENTS(state, payload) {
      state.appointments = payload;
    },
    UPDATE_LOAD(state) {
      state.loaded = false;
    },
  },
  actions: {
    getAnimals({ commit }) {
      return api
        .get(`/animal`)
        .then((response) => {
          commit("UPDATE_ANIMALS", response.data);
          commit("UPDATE_LOAD");
        })
        .catch((error) => {
          commit("UPDATE_LOAD");

          Vue.swal.fire({
            icon: "error",
            title: "Algo deu errado!",
            text: error,
          });
        });
    },
    getAppointments({ commit }) {
      return api
        .get(`/appointment?skip=0&limit=500`)
        .then((response) => {
          commit("UPDATE_APPOINTMENTS", response.data);
          commit("UPDATE_LOAD");
        })
        .catch((error) => {
          commit("UPDATE_LOAD");

          Vue.swal.fire({
            icon: "error",
            title: "Algo deu errado!",
            text: error,
          });
        });
    },
  },
});
