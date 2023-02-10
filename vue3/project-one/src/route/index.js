import { createRouter, createWebHashHistory } from 'vue-router';

// 修改为路由懒加载
// import Home from "../page/HomeCom";
// import About from "../page/AboutCom";
const Home = () => import('../page/HomeCom.vue');
const About = () => import('../page/AboutCom.vue');
const Login = () => import('../page/LoginPage.vue');
const Detail = () => import('../page/DetailCom.vue');

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 路由独享配置
// 1、路由独享守卫：配置时添加beforeEnter

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: { transition: 'slide-left' }
  },
  {
    path: '/about/',
    component: About,
    name: 'About',
    children: [
      {
        path: 'detail',
        component: Detail,
        name: 'Detail'
      }
    ]
  },
  // { path: '/about/detail', name: 'Detail', component: Detail },
  { path: '/login', name: 'Login', component: Login }
];

// 3. 创建路由实例并传递 `routes` 配置

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
  //   scrollBehavior(to, from, savedPosition) {
  //     // 始终滚动到顶部
  //     return { top: 0 };
  //   },

  //   你也可以通过 el 传递一个 CSS 选择器或一个 DOM 元素。在这种情况下，top 和 left 将被视为该元素的相对偏移量
  //   scrollBehavior(to, from, savedPosition) {
  //     // 始终在元素 #main 上方滚动 10px
  //     return {
  //       // 也可以这么写
  //       // el: document.getElementById('main'),
  //       el: "#app",
  //       top: -20,
  //     };
  //   },

  // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
  //   scrollBehavior(to, from, savedPosition) {
  //     if (savedPosition) {
  //       return savedPosition;
  //     } else {
  //       return { top: 0 };
  //     }
  //   },

  //   scrollBehavior(to, from, savedPosition) {
  //     if (to.hash) {
  //       return {
  //         el: to.hash,
  //         behavior: "smooth",
  //       };
  //     }
  //   },

  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 500);
    });
  }
});

// 全局前置导航守卫
router.beforeEach(async (to, from) => {
  //   console.log("to=", to.name);
  //   console.log("from=", from);
  //   if (to.name === "About") {
  //     return "/login";
  //   }
});

// 全局后置导航守卫
// router.afterEach(async (to, from) => {});

export default router;
