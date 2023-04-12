<template>
  <section class="details">
    <div class="container">
      <router-link to="/">
        <button>
          <font-awesome-icon icon="fa-solid fa-arrow-left-long" />Back
        </button>
      </router-link>
      <div class="main-content" v-if="countryInfo.name">
        <img :src="countryFlagSrc" :alt="`${countryInfo.name} flag`" />
        <div>
          <h2 v-text="countryInfo.name"></h2>
          <div class="main-info">
            <div>
              <span
                >Native Name:<span v-text="countryInfo.nativeName"></span
              ></span>
              <span>Population:<span v-text="countryPopulation"> </span> </span>
              <span>Region:<span v-text="countryInfo.region"></span></span>
              <span
                >Sub Region:<span v-text="countryInfo.subregion"></span
              ></span>
              <span v-if="countryInfo.capital"
                >Capital:<span v-text="countryInfo.capital"></span
              ></span>
            </div>
            <div>
              <span
                >Top Level Domain:<span v-text="countryTopLevelDomain"></span
              ></span>
              <span v-if="countryInfo.currencies"
                >Currencies:<span v-text="countryCurrencies"></span
              ></span>
              <span>Languages:<span v-text="countryLanguages"> </span></span>
            </div>
          </div>
          <div class="borders" v-if="countryInfo.borders">
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
      countryName: this.$route.params.name.toLowerCase(),
      countryInfo: "",
      countries: [],
    };
  },
  computed: {
    countryFlagSrc: function () {
      return this.countryInfo.flags.png.replace("w320", "h120");
    },
    countryPopulation: function () {
      return this.countryInfo.population.toLocaleString();
    },
    countryTopLevelDomain: function () {
      return this.countryInfo.topLevelDomain.join(", ");
    },
    countryCurrencies: function () {
      return this.countryInfo.currencies.map((e) => e.name).join(", ");
    },
    countryLanguages: function () {
      return this.countryInfo.languages.map((e) => e.name).join(", ");
    },
    countryBorders: function () {
      return this.countryInfo.borders
        .map((e) => this.countries.filter((ele) => ele.alpha3Code === e))
        .map((e) => e[0].name);
    },
  },
  created() {
    fetch("https://restcountries.com/v2/all")
      .then((resolved) => resolved.json())
      .then((resolved) => {
        this.countries = resolved;
        let allCountriesName = this.countries.map((e) => e.name.toLowerCase());
        if (allCountriesName.includes(this.countryName)) {
          this.countryInfo = resolved.filter(
            (e) => e.name.toLowerCase() === this.countryName
          )[0];
        } else {
          this.$router.push({
            path: "/",
          });
        }
      })
      .catch((rejected) => console.log(Error(rejected)));
  },
};
</script>

<style lang="scss" scoped>
.details {
  @extend %main-page-style;
  button {
    padding: 9px 28px;
    color: var(--inputs-color);
    background-color: var(--elements-color);
    border: none;
    box-shadow: 0px 0px 6px -1px var(--box-shadow-color);
    border-radius: $main-border-radius;
    margin: 60px 0;
    svg {
      color: var(--text-color);
      margin-right: 10px;
    }
  }
  .main-content {
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
      filter: drop-shadow(0px 20px 0px var(--filter-color))
        drop-shadow(0px -20px 0px var(--filter-color))
        drop-shadow(20px 0px 0px var(--filter-color))
        drop-shadow(-20px 0px 0px var(--filter-color));
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
        color: var(--text-color);
      }
      > .main-info {
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
            color: var(--text-color);
            font-weight: 600;
            > span {
              color: var(--inputs-color);
              &:before {
                content: " ";
              }
            }
          }
        }
      }
      > .borders {
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
          color: var(--text-color);
          font-weight: 600;
        }
        > div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 5px;
          span {
            color: var(--inputs-color);
            border-radius: $main-border-radius;
            background-color: var(--elements-color);
            box-shadow: 0px 0px 8px -4px var(--box-shadow-color);
            font-size: 14px;
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
