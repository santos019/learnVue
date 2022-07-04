<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="ask in fetchedAsk" v-bind:key="ask.id" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link v-bind:to="`item/${ask.id}`">
              {{ask.title}}
            </router-link>
          </p>
          <small class="link-text">
            {{ask.time_ago}}
            by
            <router-link v-bind:to="`/user/${ask.user}`">
              {{ask.user}}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js'
import ListItem from '../components/ListItem.vue'
/// import bus from  '../utils/bus'
import ListMixin from '../mixins/ListMixin.js'
export default {
  components: {
    ListItem
  },

  // computed:{
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),
    // 또는 
    // ...mapGetters([
    //   fetchedAsk:'fetchedAsk'
    // ]),
    // ...mapState({ //state를 바로 쓰고 싶으면
    //   ask: state => state.ask
    // })
  // created() {
    
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASK')
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