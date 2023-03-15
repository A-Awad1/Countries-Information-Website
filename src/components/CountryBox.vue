<template>
  <section>
    <img :src="flagSrc" :alt="flagAlt" />
    <div>
      <h3 v-text="name"></h3>
      <div><span>Population: </span><span v-text="population"></span></div>
      <div><span>Region: </span><span v-text="region"></span></div>
      <div><span>Capital: </span><span v-text="capital"></span></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountryBox",
  props: ["flagSrc", "flagAlt", "name", "population", "region", "capital"],
};
</script>

<style scoped lang="scss">
section {
  background-color: $lElements;
  font-size: 14px;
  div {
    span:first-of-type {
      color: $lText;
      font-weight: 600;
    }
  }
}
</style>
