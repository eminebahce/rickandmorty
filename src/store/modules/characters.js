import axios from 'axios';
const baseURL = "https://rickandmortyapi.com/api/";

export const url = axios.create({baseURL: baseURL});

const state = {
    characters : [],
    info: {},
    lastEpisodeInfo: [],
    episodeDictionary: new Map()
};

const  getters = {
    parseLastEpisodeIds: state => {
        const allCharacters = state.characters;
        const lastEpisodesOfCharacters = new Set ([]);
        allCharacters.map(character => {
            lastEpisodesOfCharacters.add(
                character.episode[character.episode.length-1]
                    .replace('https://rickandmortyapi.com/api/episode/', ''))
        });
        return Array.from(lastEpisodesOfCharacters);
    }

};

const actions = {
    loadCharactersAndInfo({commit}) {
        return url.get('character')
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
    },
    getLastEpisodeInfo({commit}, episodeNumberArray) {
        return url.get(`episode/${episodeNumberArray}`)
            .then(response => commit('getLastEpisodeInfo', response.data))
            .catch(error => {
                /*eslint-disable*/
                console.log(error)
            })
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

    },
    getLastEpisodeInfo(state, lastEpisodeInfo) {
       state.episodeDictionary = new Map();
       lastEpisodeInfo.map(episode => {
           state.episodeDictionary.set(episode.id, episode.episode + " - " +episode.name);
       })
    },
};

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}