import Vue from 'vue';
import Vuex from 'vuex';
// import mutations from './mutations.js'
//import actions from './actions.js'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        userData: [],
    },
    getters: {
        fetchedUserdata(state) {
           // 동기적으로 데이터 값을 넣을 때 마다 set 호출 처음 데이터는 home 페이지 할 때 마다 호출
            return state.userData;
        },

    },
    mutations:{
        SET_USERDATA_INIT (state, userdata) {
            state.userData = userdata;
            localStorage.setItem('userData', JSON.stringify(state.userData));
        },
        SET_USERDATA (state, userdata) {
            state.userData = userdata;    
            localStorage.setItem('userData', JSON.stringify(state.userData));
        }
    },
    actions:{
        FETCH_USERDATA ({commit}, userdata) {
            //const data = JSON.parse(localStorage.getItem('userData')) || [];
            commit('SET_USERDATA', userdata);
        },
        FETCH_USERDATA_INIT ({commit}) {
            const data = JSON.parse(localStorage.getItem('userData')) || [] ;
            console.log(data)
            commit('SET_USERDATA_INIT', data);
        }
    }
})