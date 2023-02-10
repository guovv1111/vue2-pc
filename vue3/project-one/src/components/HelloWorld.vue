<template>
  <div ref="mydom">
    <div class="hello">reactive使用限制</div>
    <div>1、只对对象类型生效，基本数据类型无效</div>
    <div>
      2、vue响应式是通过属性实现的，必须保持对响应式对象的相同引用。不可随便更换响应式对象，这样会导致对初始引用的连接丢失。
    </div>
    <button @click="handleCount">修改count</button>
    <div>{{ state.count }}</div>
    <div>{{ count }}</div>
    <Teleport :disabled="isMobile">
      ...。。。。。。。。。。。Teleport
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, defineExpose } from 'vue';

const state = reactive({ count: 0 });
const mydom = ref(null);
const isMobile = ref(true);

// n 是一个局部变量，同 state.count
// 失去响应性连接
const n = state.count;
// 不影响原始的 state

// toRefs() toRef()用于解构reactive创建响应式对象，使解构的属性仍然具有响应性
const { count } = toRefs(state);

// 暴露子组件传给父组件的属性
defineExpose({ state });

function handleCount() {
  // state.count++;
  count.value += 1;
}

onMounted(() => {
  console.log('ref dom:', mydom.value);
});
</script>

<style scoped></style>
