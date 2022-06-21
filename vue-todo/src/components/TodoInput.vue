<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" class="inputDiv">
    <span class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>
    <script src="https://kit.fontawesome.com/614602752e.js" crossorigin="anonymous"></script>
<script>

export default {
  data: function() {
    return {
      newTodoItem:""
    }
  },
  methods: {
    addTodo: function() {
      if(this.newTodoItem !== '') {
      const obj ={completed: false, item: this.newTodoItem}
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj))
      this.clearInput();
          }

},
    clearInput: function () {
      this.newTodoItem ='';
    }
  }
}
</script>

<style scoped>
.inputDiv{
  width: 90%;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, blue, red);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: wheat;
  vertical-align: middle;
}
</style>