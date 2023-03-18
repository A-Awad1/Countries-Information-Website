<template>
  <router-link
    tag="section"
    :to="{ name: 'details', params: { name: name } }"
    v-if="filtration"
  >
    <img :src="flagSrc" :alt="flagAlt" />
    <div>
      <h4 v-text="name"></h4>
      <div><span>Population: </span><span v-text="population"></span></div>
      <div><span>Region: </span><span v-text="region"></span></div>
      <div>
        <span>Capital: </span><span v-text="capital || 'No Capital'"></span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CountryBox",
  props: [
    "flagSrc",
    "flagAlt",
    "name",
    "population",
    "region",
    "capital",
    "filterName",
    "filterRegion",
  ],
  computed: {
    filtration: function () {
      return new RegExp(this.filterName, "ig").test(this.name) &&
        (new RegExp(this.filterRegion, "ig").test(this.region) ||
          this.filterRegion === "")
        ? true
        : false;
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
