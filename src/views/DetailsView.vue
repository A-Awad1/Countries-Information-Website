<template>
  <section class="details">
    <div class="container">
      <router-link tag="button" to="/"
        ><font-awesome-icon
          icon="fa-solid fa-arrow-left-long"
        />Back</router-link
      >
      <div class="main-info">
        <img src="" alt="" />
        <div>
          <h3 v-text="countryInfo.name"></h3>
          <div>
            <span
              >Native Name:<span v-text="countryInfo.nativeName"></span
            ></span>
            <span
              >Population:<span>
                {{ countryInfo.population | formatNumber }}
              </span>
            </span>
            <span>Region:<span v-text="countryInfo.region"></span></span>
            <span>Sub Region:<span v-text="countryInfo.subregion"></span></span>
            <span>Capital:<span v-text="countryInfo.capital"></span></span>
          </div>
          <div>
            <span
              >Top Level Domain:<span></span
              >{{ countryInfo.topLevelDomain | joinArray }}</span
            >
            <span
              >Currencies:<span>{{ countryCurrencies | joinArray }}</span></span
            >
            <span
              >Languages:<span> {{ countryLanguages | joinArray }}</span></span
            >
          </div>
          <div>
            <span>Border Countries:</span>
            <div>
              <span
                v-for="border in countryBorders"
                :key="border"
                v-text="border"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      countryName: this.$route.params.name,
      countryInfo: "",
      countries: [],
    };
  },
  methods: {
    getCountryInfo: function () {
      fetch("https://restcountries.com/v2/all")
        .then((resolved) => {
          return resolved.json();
        })
        .then((resolved) => {
          this.countries = resolved;
          this.countryInfo = resolved.filter(
            (e) => e.name === this.countryName
          )[0];
        });
    },
  },
  computed: {
    countryCurrencies: function () {
      return this.countryInfo.currencies.map((e) => e.name);
    },
    countryLanguages: function () {
      return this.countryInfo.languages.map((e) => e.name);
    },
    countryBorders: function () {
      let borders = this.countryInfo.borders.map((e) =>
        this.countries.filter((ele) => ele.alpha3Code === e)
      );
      return borders.map((e) => e[0].name);
    },
  },
  mounted() {
    this.getCountryInfo();
  },
};
</script>

<style lang="scss" scoped>
.details {
  @extend %main-page-style;
  button {
    padding: 9px 28px;
    background-color: $lElements;
    border: none;
    box-shadow: 0px 0px 6px -1px $lInput;
    border-radius: $main-border-radius;
    margin: 60px 0;
    svg {
      margin-right: 10px;
    }
  }
  span {
    display: block;
  }
  span:last-of-type {
    display: inline;
    margin-left: 20px;
  }
}
</style>
