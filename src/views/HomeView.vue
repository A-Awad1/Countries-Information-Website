<template>
  <div class="home">
    <div class="container">
      <FiltrationTools />
      <section class="all-countries">
        <CountryBox
          v-for="country in countries"
          :key="country.name"
          :countryData="country"
          :filterName="filterName"
          :filterRegion="filterRegion"
        />
      </section>
    </div>
  </div>
</template>

<script>
import FiltrationTools from "@/components/FiltrationTools.vue";
import CountryBox from "@/components/CountryBox.vue";
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data: function () {
    return {
      countries: [],
    };
  },
  computed: {
    ...mapState(["filterName", "filterRegion"]),
  },
  mounted() {
    fetch("https://restcountries.com/v2/all")
      .then((resolved) => resolved.json())
      .then((resolved) => (this.countries = resolved))
      .catch((rejected) => console.log(Error(rejected)));
  },
  components: {
    CountryBox,
    FiltrationTools,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @extend %main-page-style;
  .all-countries {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 70px;
    @include underTablet {
      justify-content: center;
      padding: 0 35px;
      grid-template-columns: minmax(200px, 300px);
      min-width: 200px;
    }
  }
}
</style>
