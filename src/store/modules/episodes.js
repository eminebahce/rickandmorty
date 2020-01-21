import {url} from './characters';

const state = {
    episodes: [],
    getCharactersInEpisode: []
};

const getters = {
    parseCharacterIds: state => {
        const charactersInEpisode = state.episodes.characters;
        let characterIds = [];
        charactersInEpisode.map(character => {
            characterIds.push(character.replace('https://rickandmortyapi.com/api/character/', ''));
        });
        return characterIds;
    }
};

const actions = {
    loadEpisodes({commit}, path) {
        return url.get(path)
            .then(response => {
                commit('loadEpisodes', response.data)
            })
            .catch(error => {
                /*eslint-disable*/
                console.log(error)
            })
    },
    getCharactersInEpisode({commit}, characterIds) {
        return url.get(`character/${characterIds}`)
            .then(response => {
                commit('getCharactersInEpisode', response.data)
            })
            .catch(error => {
                /*eslint-disable*/
                console.log(error)
            })
    }
};

const mutations = {
    loadEpisodes(state, episodeInfo) {
        state.episodes = episodeInfo;
    },
    getCharactersInEpisode(state, charactersInEpisode) {
        state.getCharactersInEpisode = charactersInEpisode;
    }
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}