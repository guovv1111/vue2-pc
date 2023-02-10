<!-- vuex示例 leval1 -->
<template>
  <div>
    <ul>
      <li v-for="p in $store.state.person" :key="p.id">
        姓名：{{ p.personName }} 年龄：{{ p.age }}
        <button @click="deletePerson(p.id)">删除</button>
      </li>
    </ul>
    <span> 学生年龄总和：{{ $store.getters.getAllPersonAge }} </span>

    <input type="text" v-model="newPerson" />
    <button @click="addPerson">添加</button>
  </div>
</template>
<script>
export default {
  name: "PageOne",
  data() {
    return {
      newPerson: "",
    };
  },
  methods: {
    // 组件中使用this.$store.dispatch("aaa", xxx)触发actions中的aaa方法，参数为xxx
    addPerson() {
      if (this.newPerson == "") {
        alert("请输入姓名");
        return;
      }
      this.$store.dispatch("addPerson", this.newPerson);
      this.newPerson = "";
    },

    deletePerson(id) {
      this.$store.commit("deletePerson", id);
    },
  },
};
</script>
