<template>
  <div>
    <app-Header :propsdata="title" @renew="renew"></app-Header>
    <form v-on:submit.prevent="submitForm" action="">
      <div>
        <label for="username">id:</label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw:</label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
    <div>
      <label for="title">title:</label>
      <input id="title" type="text" v-model="title">
    </div>
    {{childValue}}
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'

export default {
  components: { 
    "app-Header" : AppHeader
   },
 data: function() {
   return {
     username: '',
     password: '',
     title: '',
     childValue: ''
   }
 },
 methods: {
   submitForm: function() {
     // event.preventDefault();
     console.log(this.username, this.password)
     const url = 'https://jsonplaceholder.typicode.com/users';
     const data = {
       username: this.username,
       password: this.password
     }
     axios.post(url, data).then(function(res) {
       console.log(res);
     }).catch(function(err) {
       console.log(err)
     })
   },
   renew: function(value) {
     this.childValue = value
     console.log("parent"+ value)
   }
 }
}
</script>

<style>

</style>