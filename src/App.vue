<template>
  <main id="app">
    <MainHeader />
    <router-view />
  </main>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "App",
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
