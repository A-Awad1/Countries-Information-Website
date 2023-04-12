<template>
  <main id="app">
    <MainHeader :modeButton="modeButton" :changeMode="changeMode" />
    <router-view />
  </main>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import { ref, watch, onMounted } from "vue";

export default {
  name: "App",
  setup: function () {
    const mode = ref("");
    const modeButton = ref("");
    function changeMode() {
      mode.value =
        !localStorage.mode || localStorage.mode === "Light" ? "Dark" : "Light";
    }
    watch(mode, function (v) {
      localStorage.mode = v;
      document.documentElement.dataset.mode = v;
      modeButton.value = v === "Light" ? "Dark" : "Light";
    });
    onMounted(function () {
      mode.value =
        !localStorage.mode || localStorage.mode === "Light" ? "Light" : "Dark";
    });

    return { mode, modeButton, changeMode };
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
