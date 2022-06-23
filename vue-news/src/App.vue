<template>
  <div id="app">
    <my-tool-bar></my-tool-bar>
    <router-view></router-view>
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

</style>
