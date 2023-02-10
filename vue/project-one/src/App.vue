<template>
  <div>
    <footer class="footer">
      <div
        v-for="item in list"
        :key="item.name"
        class="bottom-button"
        @click="handleRouter(item)"
      >
        <router-link to="/home">{{ item.name }}</router-link>
      </div>
    </footer>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "AppRouter",
  data() {
    return {
      list: [
        {
          to: "/home",
          name: "主页",
        },
        {
          to: "/about",
          name: "关于",
        },
        {
          to: "/my",
          name: "我的",
        },
      ],
    };
  },
  methods: {
    handleRouter(item) {
      console.log(item);
      // alert(2);
      this.$router.push(item.to);
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
}
.bottom-button {
  text-align: center;
  flex-grow: 1;
  background: #ccc;
}
</style>
