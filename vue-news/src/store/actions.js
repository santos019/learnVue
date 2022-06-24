import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo  } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(res => {
            context.commit('SET_NEWS', res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_JOBS({commit}) {
        fetchJobsList()
        .then(({data}) => {
            commit('SET_JOBS', data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(res => {
            context.commit('SET_ASK', res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}