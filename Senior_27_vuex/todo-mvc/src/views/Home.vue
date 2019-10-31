<template>
  <div id="Home">
    <ul>
      <li>
        <span class="do-all" @click="doneAll">^</span>
        <input type="text" @keydown.enter="addNewTodo(input_todo)" v-model="input_todo" />
      </li>
      <li
        class="item"
        :class="item.states?'completed':''"
        v-for="(item,index) in filteredTodos"
        :key="index"
      >
        <input type="checkbox" v-model="item.states" />
        {{item.name}}
        <span @click="deleteTodo(index)">x</span>
      </li>
      {{leftItemsNum}} items left
      <button @click="visibility='all'">All</button>
      <button @click="visibility='active'">Active</button>
      <button @click="visibility='completed'">Completed</button>
      <button @click="clearTodos" v-if="completedItemsNum">ClearTodos</button>
    </ul>
  </div>
</template>

<script>
//import store from '../store'
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
        input_todo:""
    };
  },
  computed: {
    ...mapState(["todo", "todos", "visibility"]),
    ...mapGetters(["leftItemsNum", "completedItemsNum", "filteredTodos"])
  },
  methods: {
    ...mapMutations(["addNewTodo", "deleteTodo", "doneAll", "clearTodos"])
  }
};
</script>

<style lang="stylus" scoped>
li {
  list-style: none;
}

span.do-all {
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  transform: rotate(180deg) scaleX(1.3);
  line-height: 20px;
  margin: 0 10px;
}

li.item {
  margin: 10px 20px;
  position: relative;
}

li.item.completed {
  text-decoration: line-through grey;
  color: grey;
}

li.item input {
  margin-right: 10px;
}

li.item span {
  cursor: pointer;
  display: none;
  position: absolute;
  left: 10%;
}

li.item:hover span {
  display: inline;
}
</style>