import { url }  from './characters';

const state = {
    locations: [],
    info: {}
};

const getters = {};

const actions = {
    loadLocations({commit}) {
        return url.get('/location')
            .then(response => {
                commit('loadLocations', response.data)
            })
            .catch(error => {
                /*eslint-disable*/
                console.log(error)
            })
    }
};

const mutations = {
    loadLocations(state, locations) {
        state.locations = locations.results;
        state.info = locations.info;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}