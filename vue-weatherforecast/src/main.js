import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'
import VueGeolocationApi from 'vue-geolocation-api'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  VueGeolocationApi
  
}).$mount('#app')
