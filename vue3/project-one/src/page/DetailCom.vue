<template>
  <div>
    <ul>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
      <li>detail</li>
    </ul>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const userData = ref();

// route 对象是一个响应式对象
// 所以它的任何属性都可以被监听
// 但你应该避免监听整个 route 对象
// 在大多数情况下，你应该直接监听你期望改变的参数。
// 当参数更改时获取用户信息
// watch(
//   () => route.params.id,
//   async (newId) => {
//     userData.value = '当前是' + newId;
//   }
// );
</script>
