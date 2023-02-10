<template>
  <div class="main">
    <h1>home</h1>
    <router-link to="/home/detail">详情</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("route-------", this.$route);
    console.log("router-------", this.$router);
  },
};
</script>

<style scoped>
.main {
  width: 400px;
  height: 400px;
  background: #000;
  font-size: 24px;
  color: red;
}
</style>
