import Vue from 'vue';
import Vuex from 'vuex';
import { fetchWeather, fetchRealLocation } from '../api/index.js'
import { LongtideLatitudeToCoordinate } from '../lib/index'
// import mutations from './mutations.js'
//import actions from './actions.js'
import {
    SET_USERDATA_INIT,
    SET_USERDATA,
    SET_CURRNETLOCATIONWEATHER,
    SET_REALLOCATIONCOORDINATE,
    REMOVE_USERDATA
} from './mutation-type'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userData: [],
        currentWeather:{},
        bookmarkLocation:[],
        currentcoordinate:{},
        userDate:{},
    },
    getters: {
        userData(state) {
           // 동기적으로 데이터 값을 넣을 때 마다 set 호출 처음 데이터는 home 페이지 할 때 마다 호출
            return state.userData;
        },
        currentWeather(state) {
            return state.currentWeather
        }
    },
    mutations:{
        [SET_USERDATA_INIT]: (state) => {
            const userData = JSON.parse(localStorage.getItem('userData')) || [] ;
            state.userData = userData;
            localStorage.setItem('userData', JSON.stringify(state.userData));
        },
        [SET_USERDATA]: (state, user) => {
            state.userData.push(user);
            localStorage.setItem('userData', JSON.stringify(state.userData));
        },
        [SET_CURRNETLOCATIONWEATHER]: (state, data) => {
            state.currentWeather = data;
            console.log(state.currentWeather);
        },
        [SET_REALLOCATIONCOORDINATE]: (state, data) => {
            state.currentcoordinate = data
            console.log(state.currentcoordinate)
        },
        [REMOVE_USERDATA]: (state, data) => {
            state.userData = state.userData.filter(el => el.title !== data.title)
            localStorage.setItem('userData', JSON.stringify(state.userData));
        }
    },
    actions:{
        // fetchUserData ({ commit }) {
        //     commit(FETCH_USERDATA_REQUEST)
        //     try {
        //         const { res } = axis.get('')
        //         commit(FETCH_USERDATA_SUCCESS, res)
        //         return res    
        //     } catch (error) {
        //         commit(FETCH_USERDATA_FAILED, error)
        //     }
        // }
        FETCH_CURRNETLOCATIONWEATHER ({ commit }, data) {
            fetchWeather(data)
            .then(res => {console.log(res)
                commit(SET_CURRNETLOCATIONWEATHER, res)
            })
            .catch(err => console.log(err))
            //console.log(this.currentLocation);
        },
        FETCH_REALLOCATION: async ({ commit }) => {
            try {
                const location  = await fetchRealLocation();
                const coordinate = LongtideLatitudeToCoordinate('toXY',location.latitude,location.longitude)
                coordinate.locationName = location.code.substr(location.code.indexOf('대한민국')+5,)
                commit(SET_REALLOCATIONCOORDINATE, coordinate)
                return Promise.resolve()
            } catch (error) {
                console.log(error)
            }

        },
        FETCH_TODAY () {

        }

    }
})