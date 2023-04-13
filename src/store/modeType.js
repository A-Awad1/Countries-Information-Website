export default {
  namespaced: true,
  strict: true,
  state: {
    mode: "",
    modeButton: "",
  },
  getters: {},
  mutations: {
    updateMode: function (state) {
      state.mode =
        !localStorage.mode || localStorage.mode === "Light" ? "Light" : "Dark";
    },
    updateModeButton: function (state) {
      state.modeButton = state.mode === "Light" ? "Dark" : "Light";
    },
    changeMode: function (state) {
      state.mode =
        !localStorage.mode || localStorage.mode === "Light" ? "Dark" : "Light";
    },
  },
};
