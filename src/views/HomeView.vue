<template>
  <div class="home">
    <div class="container">
      <FilterElements msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import FilterElements from "@/components/FilterElements.vue";

export default {
  name: "HomeView",
  components: {
    FilterElements,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $lBackground;
  min-height: calc(100vh - 67px);
  box-shadow: inset 0 3px 6px -6px $lInput;
}
</style>
