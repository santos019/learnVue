import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import { store } from '../store/index.js'
import bus from '../utils/bus.js'
// import CreateListView from '../views/CreateListView';

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
            component:NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                    console.log(5)
                    console.log('fetched')
                    bus.$emit('end:spinner')
                    next()
                })
                .catch((err) => console.log(err))
                console.log('to', to);
                console.log('from', from);
                console.log(next);
               
            }
            //component: CreateListView('NewsView')
        },
        {
            path:'/ask',
            name:'ask',
            component:AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                    console.log(5)
                    console.log('fetched')
                    next()
                })
                .catch((err) => console.log(err))
                console.log('to', to);
                console.log('from', from);
                console.log(next);
               
            }
            //component: CreateListView('AskView')
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then( () => {
                    console.log(5)
                    console.log('fetched')
                    next()
                })
                .catch((err) => console.log(err))
                console.log('to', to);
                console.log('from', from);
                console.log(next);
               
            }
            //component: CreateListView('JobsView')
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
