<template>
  <section class="details">
    <div class="container">
      <router-link tag="button" to="/"
        ><font-awesome-icon
          icon="fa-solid fa-arrow-left-long"
        />Back</router-link
      >
      <div class="main-info">
        <img
          :src="countryInfo.flags.png | flagHeight"
          :alt="`${countryInfo.name} flag`"
        />
        <div>
          <h2 v-text="countryInfo.name"></h2>
          <div>
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
              <span
                >Sub Region:<span v-text="countryInfo.subregion"></span
              ></span>
              <span>Capital:<span v-text="countryInfo.capital"></span></span>
            </div>
            <div>
              <span
                >Top Level Domain:<span>
                  {{ countryInfo.topLevelDomain | joinArray }}</span
                ></span
              >
              <span
                >Currencies:<span>{{
                  countryCurrencies | joinArray
                }}</span></span
              >
              <span
                >Languages:<span>
                  {{ countryLanguages | joinArray }}</span
                ></span
              >
            </div>
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
    color: $lInput;
    background-color: $lElements;
    border: none;
    box-shadow: 0px 0px 6px -1px $lInput;
    border-radius: $main-border-radius;
    margin: 60px 0;
    svg {
      color: $lText;
      margin-right: 10px;
    }
  }
  .main-info {
    display: flex;
    gap: 70px;
    @include underMedium {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    @include underTablet {
      align-items: start;
    }
    > img {
      width: 450px;
      filter: drop-shadow(0px 20px 0px #f8f8f8)
        drop-shadow(0px -20px 0px #f8f8f8) drop-shadow(20px 0px 0px #f8f8f8)
        drop-shadow(-20px 0px 0px #f8f8f8);
      @include underLarge {
        align-self: center;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
    }
    > div {
      padding: 20px 0;
      flex: 1;
      h2 {
        color: $lText;
      }
      > div:first-of-type {
        display: flex;
        justify-content: space-between;
        @include underLarge {
          flex-direction: column;
        }
        > div {
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          > span {
            color: $lText;
            font-weight: 600;
            > span {
              color: $lInput;
              &:before {
                content: " ";
              }
            }
          }
        }
      }
      > div:last-of-type {
        display: flex;
        gap: 15px;
        margin-top: 40px;
        @include underLarge {
          flex-direction: column;
        }
        @include underMedium {
          margin-top: 20px;
        }
        > span {
          white-space: nowrap;
          color: $lText;
          font-weight: 600;
        }
        > div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 5px;
          border-radius: $main-border-radius;
          span {
            color: $lInput;
            background-color: $lElements;
            font-size: 14px;
            box-shadow: 0px 0px 8px -4px $lInput;
            min-width: 70px;
            text-align: center;
            padding: 4px 6px;
          }
        }
      }
    }
  }
}
</style>
