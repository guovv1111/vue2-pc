<!-- v2父子组件传值 -->
<!-- mixins混入 -->
<!-- extends -->
<template>
  <div class="child-main">
    <div>我是子组件2</div>
    <div>我的父组件是：{{ msg }}</div>
    <button @click="handleP">给父组件传值：</button>
    <button @click="getBrotherName">点击获取兄弟的名字</button>
    <div>兄弟的名字是：{{ myBrotherName }}</div>
    <TheC></TheC>
  </div>
</template>
<script>
import handleMix from "../mixin/index";
import TheC from "./TheC.vue";
export default {
  name: "ChildTwo",
  mixins: [handleMix],
  extends: TheC,
  props: {
    msg: String,
  },
  data() {
    return {
      myBrotherName: "",
    };
  },
  components: { TheC },
  methods: {
    handleP() {
      this.$emit("childName", "子组件2");
    },
    getBrotherName() {
      this.myBrotherName = this.$parent.$children[0].$data.myName;
    },
  },
  mounted() {
    this.handleMix();
    console.log("==========:", this.cname);
  },
};
</script>
<style scoped>
.child-main {
  padding: 15px;
  background: rgb(105, 211, 207);
}
</style>
