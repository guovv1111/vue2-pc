export const moduleA = {
  state: () => ({
    count: 1,
    list: [
      {
        id: 1,
        name: "vue",
      },
      {
        id: 2,
        name: "vuex",
      },
    ],
  }),
  actions: {
    addOne({ state, commit }) {
      console.log(state);
      let value = { id: 3, name: "antdesign" };
      commit("add", value);
    },
  },
  mutations: {
    add(state, value) {
      // 这里的 `state` 对象是模块的局部状态
      state.list.push(value);
    },
  },
  getters: {
    doubleCount(state) {
      console.log("gettter-state-----:", state);
      return state.list.length;
    },
  },
};
