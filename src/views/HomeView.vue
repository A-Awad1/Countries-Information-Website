<template>
  <div class="home">
    <div class="container">
      <FilterElements />
      <section class="all-countries">
        <CountryBox
          v-for="country in countries"
          :key="country.name"
          :flagSrc="country.flags.png | flagHeight"
          :flagAlt="`${country.name} flag`"
          :name="country.name"
          :population="country.population | formatNumber"
          :region="country.region"
          :capital="country.capital"
        />
      </section>
    </div>
  </div>
</template>

<script>
import FilterElements from "@/components/FilterElements.vue";
import CountryBox from "@/components/CountryBox.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      countries: [],
    };
  },
  methods: {
    getAllData: async function () {
      try {
        this.countries = await (
          await fetch("https://restcountries.com/v2/all")
        ).json();
      } catch (rejected) {
        console.error(Error(rejected));
      }
    },
  },
  filters: {
    flagHeight: function (e) {
      return e.replace("w320", "h120");
    },
  },
  mounted() {
    this.getAllData();
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
      display: grid;
    }
  }
}
</style>
