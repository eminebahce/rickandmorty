<template>
    <v-container>
        <router-link to="/">
            <h1 @click="returnToHomePage">Rick And Morty</h1>
        </router-link>
        <v-row>
            <v-col
                    :key="character.id"
                    cols="12"
                    sm="3"
                    v-for="character in characters"
            >
                <v-card
                        :to="{name: 'episode', params: {id: parseInt(character.episode[character.episode.length-1].replace('https://rickandmortyapi.com/api/episode/', ''))}}"
                        class="mx-auto"
                        color='#78909C'
                        flat
                        hover
                        light
                        max-width="400"
                        ripple
                        shaped
                >
                    <v-img :src="character.image"></v-img>
                    <v-card-title style="font-family: SEGA LOGO FONT; font-size: 20px"
                                  v-text="character.name">
                    </v-card-title>
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
                    <v-card-text class="black--text">
                        <div><span style="font-family: SEGA LOGO FONT">Species:</span> {{character.species}}</div>
                        <div><span style="font-family: SEGA LOGO FONT">Gender:</span> {{character.gender}}</div>
                        <div><span style="font-family: SEGA LOGO FONT">Origin:</span> {{character.origin.name}}</div>
                        <div><span style="font-family: SEGA LOGO FONT">Last Location:</span> {{character.location.name}}
                        </div>
                        <div>
                            <span style="font-family: SEGA LOGO FONT">Last episode:</span>
                            <span v-if="episodeDictionary.size > 0">
                                {{episodeDictionary.get(parseInt(character.episode[character.episode.length-1].replace('https://rickandmortyapi.com/api/episode/', '')))}}
                            </span>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="2" v-if="info.prev">
                <v-btn @click="prevPage" color="#546E7A">
                    <v-icon left>mdi-arrow-left-drop-circle-outline</v-icon>
                    Prev
                </v-btn>
            </v-col>
            <v-col cols="12" md="2" v-if="info.next">
                <v-btn @click="nextPage" color="#546E7A">
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
                    () => {
                        this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                    }
                );
            },
            prevPage() {
                this.$store.dispatch('callPage', this.info.prev).then(
                    () => {
                        this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                    }
                );
            },
            returnToHomePage() {
                this.$store.dispatch('loadCharactersAndInfo');
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
                () => {
                    this.$store.dispatch('getLastEpisodeInfo', this.parseLastEpisodeIds);
                }
            );
        },
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
        font-size: 50px;
        color: #455A64;
        position: relative;
        text-align: center;
        margin-bottom: 50px;
        padding: 50px 0px 0px 0px;
        cursor: pointer;
    }

    a {
        color: #455A64;
    }
</style>