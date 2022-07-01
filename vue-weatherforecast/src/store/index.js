import Vue from 'vue';
import Vuex from 'vuex';
import { fetchWeather, fetchRealLocation } from '../api/index.js'
// import mutations from './mutations.js'
//import actions from './actions.js'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        userData: [],
        currentLocation:'',
        currentLocationWeather:{},
        bookmarkLocation:[],
        coordinate:{},
        userDate:{},
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
        },
        SET_CURRNETLOCATIONWEATHER (state, data) {
            state.currentLocationWeather = data;
            console.log(state.currentLocationWeather);
        },
        SET_REALLOCATIONNAME (state, data) {
            console.log(data)
            state.currentLocation = data;
            console.log(state.currentLocation);
        },
        SET_REALLOCATIONCOORDINATE (state, data) {
            
            state.coordinate = data
            console.log(state.coordinate)
        }
    },
    actions:{
        FETCH_USERDATA ({commit}, userdata) {
            //const data = JSON.parse(localStorage.getItem('userData')) || [];
            commit('SET_USERDATA', userdata);
        },
        FETCH_USERDATA_INIT ({commit}) {
            const data = JSON.parse(localStorage.getItem('userData')) || [] ;
            commit('SET_USERDATA_INIT', data);
        },
        FETCH_CURRNETLOCATIONWEATHER ({commit}, data) {
            fetchWeather(data)
            .then(res => {console.log(res.data.response.body.items.item)
                commit('SET_CURRNETLOCATIONWEATHER', res.data.response.body.items.item)
            })
            .catch(err => console.log(err))
            console.log(this.currentLocation);
        },
        FETCH_REALLOCATION: async ({ commit }) => {
            const location  = await fetchRealLocation();
            const coordinate = { latitude: location.latitude, longitude: location.longitude}
            console.log(location);
            commit('SET_REALLOCATIONNAME', location.code.substr(location.code.indexOf('대한민국')+5,));
            commit('SET_REALLOCATIONCOORDINATE', coordinate)
        },
        FETCH_TODAY () {

        }

    }
})