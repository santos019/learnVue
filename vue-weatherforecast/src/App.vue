<template>
  <div id="app">
    <HeaderBox></HeaderBox>
    <div class="router-container">
      <router-view></router-view>
    </div>
    <FooterBox></FooterBox>
  </div>
</template>

<script>
import HeaderBox from '../src/components/HeaderBox.vue'
import FooterBox from '../src/components/FooterBox.vue'
export default {
  name: 'App',
  components: {
    HeaderBox,
    FooterBox,
  }
}
</script>

<style>
.router-container{
  display: inline;
}
</style>
