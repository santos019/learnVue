<template>
    <div>
      <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" v-bind:key="job.id">
        <div class="points">
          {{ job.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url">              
              {{job.title}}
            </a>
          </p>
          <small class="link-text">
            {{job.time_ago}}
            by
            <a href="job.url">
              {{job.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
// import bus from '../utils/bus'
import ListMixin from '../mixins/ListMixin.js'
export default {
  components: { ListItem },
    
//   data() {
//     return {
//       jobs:[]
//     }
//   },
// created() {
//     bus.$emit('start:spinner');
//     setTimeout(() => {
//       this.$store.dispatch('FETCH_JOBS')
//       .then(() => {
//         console.log('fetched');
//         bus.$emit('end:spinner');
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     }, 3000);
//   }
  mixins: [ListMixin]
}
</script>

<style scoped>

.news-list{
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b000;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>