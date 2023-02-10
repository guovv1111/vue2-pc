import Vue from "vue";
import VueRouter from "vue-router";

// 修改为路由懒加载
import Home from "../pages/HomeCom.vue";
import About from "../pages/AboutPage.vue";
import My from "../pages/MyPage.vue";
import Detail from "../pages/DetailPage.vue";
// const Home = () => import("../pages/HomeCom.vue");

// // 获取原型对象push函数
const originalPush = VueRouter.prototype.push;

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace;

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "detail",
        component: Detail,
        name: "Detail",
      },
    ],
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/my",
    component: My,
    name: "My",
  },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = new VueRouter({
  mode: "history",
  routes, // `routes: routes` 的缩写
});

// 全局前置导航守卫
export default router;
