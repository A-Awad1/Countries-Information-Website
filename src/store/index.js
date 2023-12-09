import { createStore } from "vuex";
import modeType from "./modeType";

export default createStore({
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
        // start modifying some data
        .then((resolve) => {
          let x = resolve.filter((e) => e.alpha3Code === "PSE")[0];
          x.name = x.name.split(",", 1)[0];
          x.currencies = x.currencies.filter((e) => e.code !== "ILS");
          let y = resolve.filter((e) => e.area === 20770)[0];
          x.borders = y.borders;
          resolve.splice(resolve.indexOf(y), 1);
          resolve
            .filter((e) => e.borders && e.borders.includes("ISR"))
            .map((e) => (e.borders[e.borders.indexOf("ISR")] = "PSE"));
          return resolve;
        })
        // end modifying the data
        .then((resolved) => commit("updateCountries", resolved))
        .catch((rejected) => console.log(Error(rejected)));
    },
  },
  modules: {
    modeType,
  },
});
