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
    animal: null,
    appointments: null,
    agenda: [],
  },
  mutations: {
    UPDATE_ANIMALS(state, payload) {
      state.animals = payload;
    },
    UPDATE_ANIMAL(state, payload) {
      state.animal = payload;
    },
    UPDATE_APPOINTMENTS(state, payload) {
      state.appointments = payload;
    },
    UPDATE_AGENDA(state, payload) {
      state.agenda = payload;
    },
    UPDATE_LOAD(state, payload = false) {
      state.loaded = payload;
    },
  },
  actions: {
    getAnimals({ commit }, id = "") {
      return api
        .get(`/animal/${id}`)
        .then((response) => {
          if (id !== "") {
            commit("UPDATE_ANIMAL", response.data);
          } else {
            commit("UPDATE_ANIMALS", response.data);
          }
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
    getAgenda({ commit }, id) {
      commit("UPDATE_LOAD", true);
      return api
        .get(`/animal/${id}/appointment`)
        .then((response) => {
          commit("UPDATE_AGENDA", response.data);
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
