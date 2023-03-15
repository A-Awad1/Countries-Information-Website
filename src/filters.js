import Vue from "vue";

Vue.filter("formatNumber", function (e) {
  return e.toLocaleString();
});

Vue.filter("flagHeight", function (e) {
  return e.replace("w320", "h120");
});
