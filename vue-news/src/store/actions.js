import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo,fetchList  } from '../api/index.js'

export default {
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS({commit}) {
        try {
                const response = await fetchJobsList();
                commit('SET_JOBS',response.data);
                return response;    
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ASK(context) {
        const response =  await fetchAskList();
        context.commit('SET_ASK', response.data)
        return response;        
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(err => {
            console.log(err)
        })
    },
    async FETCH_LIST ({commit}, pageName) {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data)
        return response;
        
    }
}