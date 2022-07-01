<template>
  <div>
    <user-profile>
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ userInfo.created }}, </span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import bus from '../utils/bus'
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_USER', userName)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((err) => {
        console.log(err)
      })
    }, 3000);
  }
}
</script>

<style>

</style>