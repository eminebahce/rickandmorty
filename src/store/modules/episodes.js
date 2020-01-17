import { url }  from './characters';

const state = {
    episodes: [],
    info: {}
};

const getters = {};

const actions = {
    loadEpisodes({commit}) {
        return url.get('/episode')
            .then(response => {
                commit('loadEpisodes', response.data)
            })
            .catch(error => {
                /*eslint-disable*/
                console.log(error)
            })
    }
};

const mutations = {
    loadEpisodes(state, episodes) {
        state.episodes = episodes.results;
        state.info = episodes.info;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}