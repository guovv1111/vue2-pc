<template>
  <div class="main">
    <PraticePageVue></PraticePageVue>
    test
  </div>
</template>

<script>
import PraticePageVue from "./PraticePage.vue";
export default {
  components: { PraticePageVue },
  mounted() {
    console.log("route-------", this.$route);
    console.log("router-------", this.$router);
  },
};
</script>

<style scoped></style>
