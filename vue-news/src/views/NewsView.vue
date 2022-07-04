<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js'
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin.js'
export default {
  components: {
    ListItem,
  },

  // created () {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_NEWS')
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  //   }, 3000);
    
  // }
  mixins: [ListMixin]
}
</script>