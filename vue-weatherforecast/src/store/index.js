import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        userData: [],
    },
    getters: {
        // fetchedUserdata(state) {
        //    // 동기적으로 데이터 값을 넣을 때 마다 set 호출 처음 데이터는 home 페이지 할 때 마다 호출
        // },
    },
    mutations,
    actions
})