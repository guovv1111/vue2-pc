import Vue from "vue";
import ToastCom from "./ToastCom";

// 生成一个实例构造器
const constructToast = Vue.extend(ToastCom);

function showTast(msg, duration = 2000) {
  const _toast = new constructToast({
    data() {
      return {
        message: msg,
        showTast: true,
      };
    },
  });

  const element = _toast.$mount().$el;
  document.body.appendChild(element);
  setTimeout(() => {
    _toast.showTast = false;
  }, duration);
}

// 在main.js中使用vue.use注册该插件
showTast.install = function (Vue) {
  Vue.prototype.$toast = showTast;
};

export default showTast;
