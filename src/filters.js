import Vue from "vue";

Vue.filter("formatNumber", (e) => e.toLocaleString());
Vue.filter("flagHeight", (e) => e.replace("w320", "h120"));
Vue.filter("joinArray", (e) => [...e].join(", "));
