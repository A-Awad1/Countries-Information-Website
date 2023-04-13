<template>
  <router-link
    :to="{ name: 'details', params: { name: countryData.name } }"
    v-if="filtration"
  >
    <section>
      <img :src="countryFlagSrc" :alt="`${countryData.name} flag`" />
      <div>
        <h4 v-text="countryData.name"></h4>
        <div>
          <span>Population: </span><span v-text="countryPopulation"></span>
        </div>
        <div>
          <span>Region: </span><span v-text="countryData.region"></span>
        </div>
        <div>
          <span>Capital: </span
          ><span v-text="countryData.capital || 'No Capital'"></span>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CountryBox",
  props: ["countryData"],
  computed: {
    ...mapState(["filterName", "filterRegion"]),
    filtration: function () {
      return new RegExp(this.filterName, "ig").test(this.countryData.name) &&
        (new RegExp(this.filterRegion, "ig").test(this.countryData.region) ||
          this.filterRegion === "")
        ? true
        : false;
    },
    countryFlagSrc: function () {
      return this.countryData.flags.png.replace("w320", "h120");
    },
    countryPopulation: function () {
      return this.countryData.population.toLocaleString();
    },
  },
};
</script>

<style scoped lang="scss">
section {
  font-size: 14px;
  border-radius: $main-border-radius;
  box-shadow: 0px 0px 8px -5px var(--box-shadow-color);
  padding-bottom: 25px;
  background-color: var(--elements-color);
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 150px;
  }
  > div {
    padding: 20px;
    line-height: 2;

    h4 {
      color: var(--text-color);
      margin-bottom: 16px;
      font-size: 16px;
    }
    span:first-of-type {
      color: var(--text-color);
      font-weight: 600;
    }
    span:last-of-type {
      color: var(--inputs-color);
      font-weight: 600;
    }
  }
}
</style>
