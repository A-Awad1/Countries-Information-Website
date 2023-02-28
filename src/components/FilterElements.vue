<template>
  <section>
    <!-- <h1>{{ msg | uppercase }}</h1> -->
    <div class="enter-country">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" />
    </div>
    <select name="region">
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "FilterElements",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  justify-content: space-between;
  color: $main-color;
}
</style>
