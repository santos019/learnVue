<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
    data() {
        return {
            todoItems: []
        }
    },
     created () {
        if(localStorage.length > 0) {
            for (let i=0; i<localStorage.length; i ++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
    },
    methods:{
      addOneItem (todoitem) {
        const obj = {completed: false, item: todoitem};
        localStorage.setItem(todoitem, JSON.stringify(obj))
        this.todoItems.push(obj);
      },
      removeOneItem (todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
      },
      toggleOneItem (todoItem, index) {
        this.todoItems[index].completed = !this.todoItems[index].completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem))

      },
      clearAllItems () {
        localStorage.clear()
        this.todoItems = [];
      }
     
    },
      
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  }
} 
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style:groove;
  width: 200px;
}
button {
  border-style:groove;

}
.shadow{
  box-shadow: 5px 10px 10px black;
}
</style>