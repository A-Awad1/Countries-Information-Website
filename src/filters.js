import Vue from "vue";

Vue.filter("formatNumber", function (e) {
  return e.toLocaleString();
});

Vue.filter("flagHeight", function (e) {
  return e.replace("w320", "h120");
});

Vue.filter("joinArray", function (e) {
  return [...e].join(", ");
});
