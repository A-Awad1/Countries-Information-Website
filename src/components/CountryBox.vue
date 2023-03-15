<template>
  <section>
    <img :src="flagSrc" :alt="flagAlt" />
    <div>
      <h4 v-text="name"></h4>
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
  font-size: 14px;
  border-radius: $main-border-radius;
  box-shadow: 0px 0px 8px -5px $lInput;
  padding-bottom: 25px;
  background-color: $lElements;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    // max-width: 100%;
    height: 150px;
  }
  > div {
    padding: 20px;
    line-height: 2;

    h4 {
      color: $lText;
      margin-bottom: 16px;
      font-size: 16px;
    }
    span:first-of-type {
      color: $lText;
      font-weight: 600;
    }
    span:last-of-type {
      color: $lInput;
      font-weight: 600;
    }
  }
}
</style>
