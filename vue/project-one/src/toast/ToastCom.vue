<template>
  <div v-if="showTast" class="main">
    <div class="content">
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "消息提示",
      showTast: true,
    };
  },
};
</script>
<style scoped>
.main {
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(2, 2, 2, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: show-toast 0.5s;
}
@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.content {
  color: rgb(156, 26, 26);
  font-size: 20px;
}
</style>
