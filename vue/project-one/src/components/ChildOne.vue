<!-- v2父子组件传值 -->
<template>
  <div class="child-main">
    <div ref="title">我是子组件1</div>
    <div>我的父组件是：{{ msg }}</div>
    <button @click="handleP">给父组件传值：</button>
    <div>通过$parent访问父组件的data{{ pData }}</div>
    <button @click="hanleP2">子组件通过$parent获取父组件的值</button>
    <h2>子组件嵌套孙子组件</h2>
    <TheC></TheC>
  </div>
</template>
<script>
import TheC from "./TheC.vue";
export default {
  name: "ChildOne",
  components: {
    TheC,
  },
  data() {
    return {
      pData: "", // 接受父组件传入的值
      myName: "11111111111",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    handleP() {
      this.$emit("childName", "子组件1");
    },
    hanleP2() {
      this.pData = this.$parent.$data.msg;
      // console.log("this.$parent", this.$parent.$data.msg);
    },
  },
};
</script>
<style scoped>
.child-main {
  padding: 15px;
  background: rgb(105, 211, 207);
}
</style>
