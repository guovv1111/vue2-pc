import Vue from "vue";
import Vuex from "vuex";
import { moduleA } from "./a";
// import { b } from "./b";

Vue.use(Vuex);

// 用来存储数据
// const state = {
//   person: [
//     { id: 0, personName: "张三", age: 18 },
//     { id: 1, personName: "张4", age: 28 },
//     { id: 2, personName: "张5", age: 38 },
//   ],
// };
// // 响应组件中的事件
// const actions = {
//   //添加人员
//   addPerson(content, value) {
//     console.log(value);
//     const person = {
//       id: 6,
//       personName: value,
//       age: 18, //暂时写死
//     };
//     console.log("---------------store对象", content);
//     content.commit("addPerson", person);
//   },
// };

// // 操作数据
// const mutations = {
//   addPerson(_, value) {
//     this.state.person.unshift(value);
//   },
//   deletePerson(_, id) {
//     const newArr = this.state.person.filter((p) => {
//       return p.id != id;
//     });
//     this.state.person = newArr;
//   },
// };

// // 用来将state数据进行加工：类似于computed
// const getters = {
//   getAllPersonAge(state) {
//     var sumAge = 0;
//     state.person.forEach((element) => {
//       sumAge += element.age;
//     });
//     return sumAge;
//   },
// };
// 新建并暴露store
export default new Vuex.Store({
  modules: {
    a: moduleA,
    // b,
  },

  //   state,
  //   actions,
  //   mutations,
  //   getters,
});
