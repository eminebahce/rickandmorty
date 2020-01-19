<template>
    <v-container>
        <h1>Rick And Morty</h1>
        <v-row>
            <v-col
                    :key="character.id"
                    cols="12"
                    sm="6"
                    v-for="character in characters"
            >
                <v-card
                        color='#263238'
                        dark
                        hover
                        flat
                        ripple
                        shaped
                >
                    <div class="d-flex justify-space-between">
                        <div>
                            <v-card-title v-text="character.name"></v-card-title>
                            <template v-if="character.status === 'Alive'">
                                <v-chip class="ml-3" outlined pill>
                                    {{character.status}}
                                    <v-icon class="ml-2" color="green accent-4" left>
                                        mdi-account-multiple-check
                                    </v-icon>
                                </v-chip>
                            </template>
                            <template v-else>
                                <v-chip class="ml-3" outlined pill>
                                    {{character.status}}
                                    <v-icon class="ml-2" color="red accent-4" left>
                                        mdi-account-remove
                                    </v-icon>
                                </v-chip>
                            </template>
                            <v-card-text>
                                <div>Species: {{character.species}}</div>
                                <v-divider class="mx-xl-4"></v-divider>
                                <div>Gender: {{character.gender}}</div>
                                <v-divider class="mx-xl-4"></v-divider>
                                <div>Origin: {{character.origin.name}}</div>
                                <v-divider class="mx-xl-4"></v-divider>
                                <div>Last Location: {{character.location.name}}</div>
                                <v-divider class="mx-xl-4"></v-divider>
                                <div>
                                    <router-link :to="{name: 'episode', params: {id: parseInt(character.episode[character.episode.length-1].replace('https://rickandmortyapi.com/api/episode/', ''))}}">
                                        Last episode:
                                        <span v-if="episodeDictionary.size > 0">
                                            {{character.episode[character.episode.length-1].replace('https://rickandmortyapi.com/api/episode/', '')}}
                                            {{episodeDictionary.get(parseInt(character.episode[character.episode.length-1].replace('https://rickandmortyapi.com/api/episode/', '')))}}
                                        </span>
                                    </router-link>
                                </div>
                                <v-divider class="mx-xl-4"></v-divider>
                            </v-card-text>
                        </div>
                        <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                        >
                            <v-img :src="character.image"></v-img>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="2">
                <v-btn color="#546E7A" @click="prevPage">
                    <v-icon left>mdi-arrow-left-drop-circle-outline</v-icon>
                    Prev
                </v-btn>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn color="#546E7A" @click="nextPage">
                    Next
                    <v-icon right>mdi-arrow-right-drop-circle-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "Characters",
        data: () => ({}),
        methods: {
            nextPage() {
                this.$store.dispatch('callPage', this.info.next).then(
                    () =>{
                        this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                    }
                );
            },
            prevPage() {
                this.$store.dispatch('callPage', this.info.prev).then(
                    () =>{
                        this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                    }
                );
            }
        },
        computed: {
            ...mapState({
                characters: state => state.characters.characters,
                info: state => state.characters.info,
                lastEpisodeInfo: state => state.characters.lastEpisodeInfo,
                episodeDictionary: state => state.characters.episodeDictionary
            }),
            ...mapGetters([
                'parseLastEpisodeIds'
            ])
        },
        created() {
            this.$store.dispatch('loadCharactersAndInfo').then(
                () =>{
                    this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                }
            );
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'SEGA LOGO FONT';
        font-style: normal;
        font-weight: normal;
        src: local('SEGA LOGO FONT'), url('SEGA.woff') format('woff');
    }
    h1 {
        font-family: "SEGA LOGO FONT";
        font-weight: 200;
        color: #455A64;
        position: relative;
        margin-left: 380px;
        margin-bottom: 50px;
        padding: 50px 0px 0px 0px;
    }
</style>