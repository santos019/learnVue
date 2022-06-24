<template>
    <div>
    <ul class="news-list">
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
    </ul>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js'
export default {
  data() {
    return {
      jobs:[]
    }
  },
created() {
    this.$store.dispatch('FETCH_JOBS')
    // const that = this;
    // fetchJobsList()
    // .then(function(res){
    //   console.log(res);
    //   that.jobs = res.data;
    // })
    // .catch(function(err) {
    //   console.log(err)
    // })

  }
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