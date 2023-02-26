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
