<template>
  <section class="filtration">
    <div class="div-input">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        placeholder="Search for a country"
        v-model="filterData.name"
      />
    </div>
    <div class="div-select">
      <select name="region" v-model="filterData.region">
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
  name: "FiltrationTools",
  data: function () {
    return {
      filterData: {
        name: "",
        region: "",
      },
    };
  },
  watch: {
    filterData: {
      handler: function () {
        this.$emit("update:passFilterData", this.filterData);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.filtration {
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
    color: var(--inputs-color);
    background-color: var(--elements-color);
    height: 45px;
    width: 390px;
    min-width: 200px;
    @include underTablet {
      width: 350px;
    }
    border-radius: $main-border-radius;
    box-shadow: 0px 0px 8px -5px var(--box-shadow-color);
    display: flex;
    align-items: center;

    svg {
      margin: {
        left: 23px;
        right: 23px;
      }
      color: var(--text-color);
    }
    input {
      border: none;
      background-color: inherit;
      width: 100%;
      padding-right: 10px;
      color: var(--text-color);
      &::placeholder {
        color: var(--text-color);
      }
    }
  }
  .div-select {
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 8px -5px var(--box-shadow-color);
    select {
      border-radius: $main-border-radius;
      border: none;
      height: 45px;
      background-color: var(--elements-color);
      color: var(--text-color);
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
      color: var(--text-color);
    }
  }
}
</style>
