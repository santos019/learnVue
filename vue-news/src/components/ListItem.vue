<template>
    <div>
        <ul class="news-list">
        <li v-for="user in ListItems" v-bind:key="user.id" class="post">
            <div class="points">
            {{ user.points || 0}}
            </div>
            <div>
            <p class="news-title">
              <template v-if="user.domain">
                <a v-bind:href="user.url">
                  {{ user.title }}
                </a>
              </template>
              <template v-else>
                <router-link v-bind:to="`item/${user.id}`">
                  {{ user.title }}
                </router-link>
              </template>
            </p>
            <small class="link-text">
                by
                <router-link v-if="user.user" v-bind:to="'/user/' + user.user">{{user.user}}</router-link>
                <a :href="user.domain" v-else>
                  {{ user.domain}}
                </a>
            </small>
            </div>
        </li>
        </ul>
    </div>   
</template>

<script>
export default {
//  created() {
//     const name = this.$route.name;
//     if( name === 'news') {
//         this.$store.dispatch('FETCH_NEWS')
//     } else if( name === 'ask') {
//         this.$store.dispatch('FETCH_ASK')
//     } else if(name === 'jobs') {
//         this.$store.dispatch('FETCH_JOBS')     
//     }
//   },
  computed: {
      ListItems() {
        return this.$store.state.list;
        //   const name = this.$route.name;
        // if( name === 'news') {
        //     return this.$store.state.news;
        // } else if( name === 'ask') {
        //     return this.$store.state.ask;
        // } else if(name === 'jobs') {
        //     return this.$store.state.jobs;  
        // } else return "";
      }
  }
}
</script>

<style>

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