<template>
  <div class="main">
    <base-menue :data="menueData" @tree-click="treeClick"></base-menue>
    <router-view></router-view>
    <!-- <router-link to="/about:1">关于1</router-link>
    <router-link to="/about:2">关于2</router-link> -->
  </div>
</template>
<script setup>
import { onActivated, reactive, ref } from 'vue';
import {
  useRouter,
  useRoute,
  onBeforeRouteLeave,
  onBeforeRouteEnter,
  RouterLink,
  useLink
} from 'vue-router';
import BaseMenue from '../components/BaseMenue.vue';

const router = useRouter();
const route = useRoute(); // route是一个响应式对象，他的每个属性都和被监听，应该尽量避免监听整个对象
const menueData = reactive([
  {
    name: '西安市',
    children: [
      {
        name: '长安区',
        path: '/about',
        children: [
          {
            name: '郭杜镇',
            path: '/about/detail'
          },
          {
            name: '大学城',
            path: '/about/detail'
          }
        ]
      },
      {
        name: '雁塔区',
        path: '/home'
      },
      {
        name: '高新区',
        path: '/home',
        children: [
          {
            name: '科技园',
            path: '/home'
          }
        ]
      }
    ]
  }
]);

onActivated(() => {
  console.log('=--------------------router', router);
  console.log('=--------------------route', route);
});

function treeClick(item) {
  console.log('当前menue', item);
  router.push({ path: item.path });
}
</script>
<style scoped>
.main {
  width: 100%;
  background: rgba(183, 75, 183, 0.5);
}
</style>
