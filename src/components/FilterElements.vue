<template>
  <section>
    <div class="div-input">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="Search for a country" />
    </div>
    <div class="div-select">
      <select name="region">
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <font-awesome-icon icon="fa-solid fa-angle-down" />
    </div>
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
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  padding: {
    top: 30px;
    bottom: 20px;
  }
  font-size: 14px;

  .div-input {
    color: $lInput;
    background-color: $lElements;
    height: 45px;
    width: 390px;
    min-width: 200px;
    @include underTablet {
      width: 350px;
    }
    border-radius: $main-border-radius;
    box-shadow: 0px 0px 8px -5px $lInput;
    display: flex;
    align-items: center;

    svg {
      margin: {
        left: 23px;
        right: 23px;
      }
    }
    input {
      border: none;
      background-color: inherit;
      width: 100%;
      padding-right: 10px;
    }
  }
  .div-select {
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 8px -5px $lInput;
    select {
      border-radius: $main-border-radius;
      border: none;
      height: 45px;
      background-color: $lElements;
      color: $lText;
      appearance: none;
      width: 180px;
      cursor: pointer;
      padding-left: 15px;
      user-select: none;
    }
    svg {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      font-size: 12px;
    }
  }
}
</style>
