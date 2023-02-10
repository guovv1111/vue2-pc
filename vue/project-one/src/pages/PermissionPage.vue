<!-- 按钮权限 -->
<template>
  <div class="main">
    <button v-permission="'add'">add</button>
    <button v-permission="'edit'">edit</button>
    <button v-permission="'del'">del</button>
  </div>
</template>
<style scoped>
.main {
  background: blue;
}
</style>
