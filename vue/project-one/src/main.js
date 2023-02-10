import Vue from "vue";
// import App from "./App.vue";
import App from "./App.vue";
import store from "./store/index";
import permisson from "./directives";
import showTast from "./toast";
import router from "./route";

Vue.config.productionTip = false;

Vue.mixin({
  created: function () {
    // console.log("---------全局混入会影响后面的每一个组件----------");
  },
});
Vue.use(permisson);
Vue.use(showTast);

// 控制台查看
window.vue = new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");

window.Vue = Vue;
