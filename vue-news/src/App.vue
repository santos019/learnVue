<template>
  <div id="app">
    <my-tool-bar></my-tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MyToolBar from './components/MyToolbar.vue'
export default {
 components: {
   MyToolBar,
 },
}
</script>

<style>
  .body {
    margin: 0;
    padding: 0;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
  a{
    text-decoration: none;
  }
  a:hover {
    color: #42b883;
    text-decoration: underline;
}
  a.router-link-exact-active {
    text-decoration: underline;
  }
</style>
