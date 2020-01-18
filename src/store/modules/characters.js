import axios from 'axios';
const baseURL = "https://rickandmortyapi.com/api/";

export const url = axios.create({baseURL: baseURL});

const state = {
    characters : [],
    info: {}
};

const  getters = {};

const actions = {
    loadCharactersAndInfo({commit}) {
        return url.get('/character')
            .then(response => {
                commit('loadCharactersAndInfo', response.data)
            })
            .catch(error =>
            /*eslint-disable*/
                console.log(error)
            );
    },
    callPage({commit}, pageUrl){
        return url.get(pageUrl)
            .then(response => {
                commit('callPage', response.data)
            })
            .catch(error =>
                /*eslint-disable*/
                console.log(error)
            );
    }
};

const mutations = {
    loadCharactersAndInfo(state, characters) {
        state.characters = characters.results;
        state.info = characters.info
    },
    callPage(state, characters) {
        state.characters = characters.results;
        state.info = characters.info;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}