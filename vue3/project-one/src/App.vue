<template>
  <div>
    <h1>vue3</h1>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    <!-- <router-view v-slot="{ Component, route }">
      <keep-alive>
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view> -->
    <router-view v-slot="{ Component }">
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
    <div class="prop-main">
      <div>{{ state.name }}</div>
      <button @click="getChild">获取子组件</button>
      <HelloWorld ref="child"></HelloWorld>
    </div>
    <div>
      <base-menue></base-menue>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import BaseMenue from './components/BaseMenue.vue';

export default {
  // 如果使用<script setup> ，则组件导入后直接使用
  // 如果没有使用<script setup> ，则需要使用components显示注册
  components: { HelloWorld, BaseMenue },
  setup() {
    const child = ref(null);
    const state = reactive({ name: 'vue3 reactive' });
    onMounted(() => {});
    function getChild() {
      console.log('通过ref获取子组件：', child.value.state);
    }
    return {
      state,
      child,
      getChild
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.prop-main {
  background: #ccc;
  margin-bottom: 10px;
}
</style>
