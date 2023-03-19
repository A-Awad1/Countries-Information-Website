<template>
  <main id="app">
    <MainHeader :modeButton="modeButton" :changeMode="changeMode" />
    <router-view />
  </main>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "App",
  data: function () {
    return {
      mode: "",
      modeButton: "",
    };
  },
  methods: {
    changeMode: function () {
      this.mode =
        !localStorage.mode || localStorage.mode === "Light" ? "Dark" : "Light";
    },
  },
  watch: {
    mode: function (v) {
      localStorage.mode = v;
      document.documentElement.dataset.mode = v;
      this.modeButton = v === "Light" ? "Dark" : "Light";
    },
  },
  mounted() {
    this.mode =
      !localStorage.mode || localStorage.mode === "Light" ? "Light" : "Dark";
  },
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
body {
  font-family: "Nunito Sans", sans-serif;
  background-color: var(--background-color);
}
</style>
