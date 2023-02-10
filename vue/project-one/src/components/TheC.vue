<template>
  <div class="c-main">
    <h1>c'c'c'c'c'c'c'c'c'c'c'c孙子组件</h1>
    <div>祖父组件传入值： {{ name.$data.name }}</div>
    <!-- <div>祖父组件传入值： {{ name() }}</div> -->
    <!-- <div>祖父组件传入值： {{ name }}</div> -->
  </div>
</template>
<script>
export default {
  name: "TheC",
  data() {
    return {
      cname: "C组件",
    };
  },
  inject: ["name"],
};
</script>
<style scoped>
.c-main {
  background: yellow;
}
</style>
