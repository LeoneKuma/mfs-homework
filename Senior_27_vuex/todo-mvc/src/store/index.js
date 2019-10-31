import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    countA: 111
  }
}

export default new Vuex.Store({
  state: {
    todo: "",
    todos: [{
        name: "吃饭",
        states: true
      },
      {
        name: "晚自习",
        states: false
      },
      {
        name: "跑步",
        states: false
      }
    ],
    visibility: "all"
  },
  mutations: {
    addNewTodo(state,todo) {
      if (!todo) return;
      state.todos.push({
        name: todo,
        states: false
      })
      state.todo = "";

    },
    deleteTodo(state,index) {
      state.todos.splice(index, 1);
    },
    doneAll(state) {
      //如果全部完成了，再点击一次则变成全部没完成
      if (state.todos.length == state.todos.filter(i => i.states).length) {
        state.todos.map(i => {
          i.states = false
        });
        return;
      }
      state.todos.map(i => {
        i.states = true
      });
    },
    clearTodos(state) {
      state.todos = state.todos.filter(i => !i.states);
    }
  },
  getters: {
    leftItemsNum(state) {
      return state.todos.filter(i => !i.states).length;
    },
    completedItemsNum(state) {
      return state.todos.filter(i => i.states).length;
    },
    filteredTodos(state) {
      if (state.visibility == "all") {
        return state.todos;
      } else if (state.visibility == "active") {
        return state.todos.filter(i => !i.states);
      } else if (state.visibility == "completed") {
        return state.todos.filter(i => i.states);
      }
      return [];
    }
  },
  actions: {},
  modules: {}
})