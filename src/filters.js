import Vue from "vue";

Vue.filter("formatNumber", function (e) {
  return e.toLocaleString();
});
