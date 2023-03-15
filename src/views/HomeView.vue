<template>
  <div class="home">
    <div class="container">
      <FilterElements />
      <section class="all-countries">
        <CountryBox />
      </section>
    </div>
  </div>
</template>

<script>
import FilterElements from "@/components/FilterElements.vue";
import CountryBox from "@/components/CountryBox.vue";

export default {
  name: "HomeView",
  date: {
    function() {
      return {
        mainAPI: "",
      };
    },
  },
  components: {
    FilterElements,
    CountryBox,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $lBackground;
  min-height: calc(100vh - 67px);
  box-shadow: inset 0 3px 6px -6px $lInput;
  .container {
    .all-countries {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
