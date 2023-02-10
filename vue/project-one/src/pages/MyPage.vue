<template>
  <div class="main">my---------------------</div>
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
