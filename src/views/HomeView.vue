<template>
  <div class="home">
    <div class="container">
      <section class="filtration">
        <div class="div-input">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <input
            type="text"
            placeholder="Search for a country"
            v-model="filterName"
          />
        </div>
        <div class="div-select">
          <select name="region" v-model="filterRegion">
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
      <section class="all-countries">
        <CountryBox
          v-for="country in countries"
          :key="country.name"
          :flagSrc="country.flags.png | flagHeight"
          :flagAlt="`${country.name} flag`"
          :name="country.name"
          :population="country.population | formatNumber"
          :region="country.region"
          :capital="country.capital"
          :filterName="filterName"
          :filterRegion="filterRegion"
        />
      </section>
    </div>
  </div>
</template>

<script>
import CountryBox from "@/components/CountryBox.vue";

export default {
  name: "HomeView",
  data: function () {
    return {
      filterName: "",
      filterRegion: "",
      countries: [],
    };
  },
  methods: {
    getAllData: function () {
      fetch("https://restcountries.com/v2/all")
        .then((resolved) => {
          return resolved.json();
        })
        .then((resolved) => {
          this.countries = resolved;
        })
        .catch((rejected) => {
          console.log(Error(rejected));
        });
    },
  },
  mounted() {
    this.getAllData();
  },
  components: {
    CountryBox,
  },
};
</script>

<style lang="scss" scoped>
.home {
  @extend %main-page-style;
  .container {
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
}
</style>
