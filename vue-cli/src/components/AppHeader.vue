<template>
  <header>
      <h1>{{propsdata}}</h1>
      <div>
      <label for="childText">childdiv:</label>
      <input @change="changeEvnt" id="childText" type="text" v-model="childText">
    </div>
    {{sendText}}
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        sendEvent: function () {
            this.$emit('renew', this.childText);
        },
        changeEvnt (event) {
            console.log('넘어감')
            this.$emit('renew', event.target.value);
        }
    },
    data: function () {
        return {    
            childText: ''
        }
    },
    computed: {
        sendText: function() {
            this.$emit('renew', this.childText);
            return ""
        }
    }

}
</script>

<style>

</style>