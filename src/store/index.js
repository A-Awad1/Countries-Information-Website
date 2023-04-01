import Vue from "vue";
import Vuex from "vuex";
import modeType from "./modeType";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  namespaced: true,
  state: {
    filterName: "",
    filterRegion: "",
  },
  mutations: {
    updateFilterName: function (state, newValue) {
      state.filterName = newValue;
    },
    updateFilterRegion: function (state, newValue) {
      state.filterRegion = newValue;
    },
  },
  modules: {
    modeType,
  },
});
