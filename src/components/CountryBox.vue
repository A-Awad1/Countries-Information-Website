<template>
  <section>
    <img src="" />
    <div>
      <h3></h3>
      <div><span>Population: </span><span></span></div>
      <div><span>Region: </span><span></span></div>
      <div><span>Capital: </span><span></span></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountryBox",
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
