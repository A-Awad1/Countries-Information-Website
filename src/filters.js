import Vue from "vue";

Vue.filter("uppercase", function (e) {
  return e.toUpperCase();
});
