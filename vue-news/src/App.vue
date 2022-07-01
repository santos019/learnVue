<template>
  <div id="app">
    <my-tool-bar></my-tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <my-spinner :loading="loadingStatus"></my-spinner>
  </div>
</template>

<script>
import MyToolBar from './components/MyToolbar.vue'
import MySpinner from './components/MySpinner.vue'
import bus from './utils/bus.js';
export default {
 components: {
   MyToolBar,
  MySpinner,
 },
 data () {
   return {
     loadingStatus: false,
   };
 },
 methods: {
   startSpinner () {
     this.loadingStatus = true;
   },
   endSpinner () {
     this.loadingStatus = false;
   }
 },
  created () {
    bus.$on('start:spinner', this.startSpinner );
    bus.$on('end:spinner', this.endSpinner );
  },
  beforeDestroy () {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
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
