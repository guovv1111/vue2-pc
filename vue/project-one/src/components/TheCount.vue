<!-- vue2实现v-model -->

<template>
  <div>
    <div>我只IT冠军{{ leval }}</div>
    <button @click="handleLeval(1)">增加 +1</button>
    <button @click="handleLeval(-1)">减少 -1</button>
  </div>
</template>
<script>
export default {
  name: "TheCount",
  props: {
    leval: {
      type: Number,
      default: 8,
    },
  },
  // 重新定义mode值事件
  model: {
    prop: "leval",
    event: "zard",
  },
  methods: {
    handleLeval(num) {
      let newLeval = this.leval + num;
      this.$emit("zard", newLeval);
    },
  },
};
</script>
