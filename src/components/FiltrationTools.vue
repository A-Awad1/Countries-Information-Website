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
        <option v-for="reg in regions" :key="reg" :value="reg">
          {{ reg }}
        </option>
      </select>
      <font-awesome-icon icon="fa-solid fa-angle-down" />
    </div>
  </section>
</template>

<script>
import { ref, watch, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "FiltrationTools",
  emits: ["passFilterData"],
  setup: function (props, context) {
    const router = useRouter();
    const route = useRoute();

    const regions = ref(["africa", "america", "asia", "europe", "oceania"]);
    const filterData = reactive({
      name: "",
      region: "",
    });
    function passData() {
      context.emit("passFilterData", filterData);
    }
    watch(
      filterData,
      function (v) {
        passData();
        if (filterData.region === "") {
          router.push({
            path: "/",
          });
        } else {
          route.query.region = null;
          router.push({
            query: {
              region: v.region,
            },
          });
        }
      },
      {
        deep: true,
      }
    );
    onMounted(function () {
      passData();
      if (route.query.region) {
        let qRegion = route.query.region.toLowerCase();
        if (regions.value.includes(qRegion)) {
          filterData.region = qRegion;
        } else {
          filterData.region = "";
          router.push({
            path: "/",
          });
        }
      }
    });
    return {
      regions,
      filterData,
      passData,
    };
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
      appearance: none;
      border-radius: $main-border-radius;
      border: none;
      height: 45px;
      background-color: var(--elements-color);
      color: var(--text-color);
      width: 180px;
      cursor: pointer;
      padding-left: 15px;
      user-select: none;
      text-transform: capitalize;
    }
    select option {
      font-size: 16px;
    }
    svg {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      font-size: 12px;
      color: var(--text-color);
      cursor: pointer;
    }
  }
}
</style>
