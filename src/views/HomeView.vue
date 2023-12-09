<template>
  <div class="home">
    <div class="container">
      <FiltrationTools :passFilterData.sync="filterData" />
      <section class="all-countries">
        <CountryBox
          v-for="country in countries"
          :key="country.name"
          :countryData="country"
          :filterData="filterData"
        />
      </section>
    </div>
  </div>
</template>

<script>
import FiltrationTools from "@/components/FiltrationTools.vue";
import CountryBox from "@/components/CountryBox.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      filterData: {
        name: "",
        region: "",
      },
      countries: [],
    };
  },
  mounted() {
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
