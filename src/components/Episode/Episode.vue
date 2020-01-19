<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12"
                   sm="6"
            >
                <v-card color='#263238'
                        class="mb-10 mt-10"
                        dark
                        hover
                        flat
                        ripple
                        shaped
                >
                    <v-card-title>
                            <span>Episode Info</span>
                    </v-card-title>
                    <v-card-text>
                        <div>Episode Name: {{episodes.name}}</div>
                        <v-divider class="mx-xl-4"></v-divider>
                        <div>Air Date: {{episodes.air_date}}</div>
                        <v-divider class="mx-xl-4"></v-divider>
                        <div>Episode: {{episodes.episode}}</div>
                        <v-divider class="mx-xl-4"></v-divider>
                        <div>Created: {{episodes.created}}</div>
                        <v-divider class="mx-xl-4"></v-divider>
                    </v-card-text>
                </v-card>
                <h1>Characters in this episode</h1>
                <v-row justify="center">
                    <v-card
                            style="margin-top: 70px"
                    >
                        <v-list>
                            <v-list-item
                                    v-for="character in getCharactersInEpisode"
                                    :key="character.id"
                            >
                                <v-list-item-icon>
                                    <v-icon color="pink">mdi-star</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title v-text="character.name"></v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-avatar>
                                    <v-img :src="character.image"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-row>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';
    export default {
        name: "Episodes",
        data: function () {
            return {
                routeId: 0,
            }
        },
        methods: {},
        computed: {
            ...mapState({
                episodes: state => state.episodes.episodes,
                getCharactersInEpisode: state => state.episodes.getCharactersInEpisode
            }),
            ...mapGetters([
                'parseCharacterIds'
            ])
        },
        created() {
            this.routeId = this.$route.path;
            this.$store.dispatch('loadEpisodes', this.routeId).
            then(
                () => {
                    this.$store.dispatch('getCharactersInEpisode', this.parseCharacterIds)
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
        position: absolute;
        margin: auto;
        padding: 0px 0px 0px 0px;
    }

</style>