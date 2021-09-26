import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: ["Mercado", "Boletos!"],
  },
  mutations: {
    addTodo(state, payload) {
      state.todoList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
