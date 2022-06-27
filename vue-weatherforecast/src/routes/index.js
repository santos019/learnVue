import Vue from "vue";
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            //redirect:'/home'
            name:'home',
            component:HomeView       
        },
    ]
})