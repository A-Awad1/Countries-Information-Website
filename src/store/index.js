import Vue from "vue";
import Vuex from "vuex";
import modeType from "./modeType";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  namespaced: true,
  state: {
    countryData: "",
    filterName: "",
    filterRegion: "",
    countries: [],
  },
  mutations: {
    updateCountryData: function (state, newValue) {
      state.countryData = newValue;
    },
    updateFilterName: function (state, newValue) {
      state.filterName = newValue;
    },
    updateFilterRegion: function (state, newValue) {
      state.filterRegion = newValue;
    },
    updateCountries: function (state, newValue) {
      state.countries = newValue;
    },
  },
  actions: {
    fetchCountries: function ({ commit }) {
      fetch("https://restcountries.com/v2/all")
        .then((resolved) => resolved.json())
        .then((resolved) => commit("updateCountries", resolved))
        .catch((rejected) => console.log(Error(rejected)));
    },
  },
  modules: {
    modeType,
  },
});
