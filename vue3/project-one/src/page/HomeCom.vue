<template>
  <div class="main">home</div>
</template>
<script setup>
import { onMounted, ref, defineProps, onActivated } from 'vue';
import {
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteEnter,
  RouterLink,
  useLink
} from 'vue-router';

// const props = defineProps({
//   ...RouterLink.props,
//   inactiveClass: String,
// });

const router = useRouter();
// const route = useRoute(); // route是一个响应式对象，他的每个属性都和被监听，应该尽量避免监听整个对象
const { route, href, isActive, isExactActive, navigate } = useLink(
  RouterLink.props
);

// 导航守卫
// onBeforeRouteLeave：离开
// onBeforeRouteUpdate：更新
onBeforeRouteLeave((to, from) => {
  //   const answer = window.confirm(
  //     "Do you really want to leave? you have unsaved changes!"
  //   );
  //   // 取消导航并停留在同一页面上
  //   if (!answer) return false;
});

onActivated(async (to, from) => {
  console.log('=--------------------onActivated');
});
</script>
<style scoped>
.main {
  width: 100%;
  height: 3000px;
  background: rgba(80, 137, 175, 0.5);
}
</style>
