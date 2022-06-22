<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" class="inputDiv">
    <span class="addContainer">
      <i class="fas fa-plus addBtn "></i>
    </span>
      <AlertModal  v-if="showModal" @close="showModal = false">
       <h3 slot="header">경고!</h3>
       <div slot="body">아무것도 입력하지 않으셨습니다.</div>
       <div slot="footer">
        <i class="closeModalBtn fa-thin fa-x" v-on:click="showModal = false"></i>
        </div>
      </AlertModal >
  </div>
</template>
    <script src="https://kit.fontawesome.com/614602752e.js" crossorigin="anonymous"></script>
<script>
import AlertModal from './common/AlertModal .vue'
export default {
  data () {
    return {
      newTodoItem:"",
      showModal:false
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput () {
      this.newTodoItem ='';
    }
  },
  components: {
    AlertModal 

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
.closeModalBtn {
  color: #42b983;

}
</style>