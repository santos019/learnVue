import Vue from 'vue';
import VueRouter from 'vue-router';
//import NewsView from '../views/NewsView.vue'
//import AskView from '../views/AskView.vue'
//import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import CreateListView from '../views/CreateListView';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path:'/news',
            name: 'news',
            //component:NewsView,
            component: CreateListView('NewsView')
        },
        {
            path:'/ask',
            name:'ask',
            //component:AskView,
            component: CreateListView('AskView')
        },
        {
            path:'/jobs',
            name:'jobs',
            component: CreateListView('JobsView')
        },
        {
            path:'/item/:id',
            component:ItemView
        },
        {
            path:'/user/:id',
            component:UserView
        },
    ]
})
