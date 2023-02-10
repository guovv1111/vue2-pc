<!-- vuex示例 leval2 模块module -->
<!--
    问题一：vue2和vue3在使用vuex的版本不一样，vue2限制在vuex@3
    问题二：创建仓库时vue2和vue3不一样。vue2.0 创建仓库 new Vuex.Store({})vue3.0 创建仓库 createStore({})
    问题三：使用模块化，取值问题。
        state: $strote.state.a.list # 全局store-全局state-模块-取值
        getters: $store.getters.doubleCount  #全局store-全局getters-取值
-->
<template>
  <div>
    <div>当前sum:{{ $store.getters.doubleCount }}</div>

    <button @click="addPerson">增加</button>
    <ul>
      <li v-for="p in $store.state.a.list" :key="p.id">
        知识：{{ p.name }}
        <button @click="deletePerson(p.id)">删除</button>
      </li>
    </ul>
    <TheCount v-model="leval"></TheCount>
  </div>
</template>
<script>
import TheCount from "@/components/TheCount.vue";
export default {
  name: "PageTwo",
  data() {
    return {
      newPerson: "",
      leval: 2,
    };
  },
  components: { TheCount },
  methods: {
    // 组件中使用this.$store.dispatch("aaa", xxx)触发actions中的aaa方法，参数为xxx
    addPerson() {
      this.$store.dispatch("addOne");
    },

    deletePerson() {
      //   this.$store.commit("deletePerson", id);
    },
  },
};
</script>
