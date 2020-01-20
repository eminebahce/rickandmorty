<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12"
                   sm="6"
            >
                <h1>Episode Details</h1>
                <v-card
                        class="mb-2 mt-10"
                        color='#78909C'
                        light
                        hover
                        flat
                        ripple
                        shaped
                >
                    <v-card-text>
                        <div><span style="font-family: SEGA LOGO FONT;" class="black--text"> Episode:</span> {{episodes.episode}}</div>
                        <div><span style="font-family: SEGA LOGO FONT" class="black--text"> Episode Name: </span> {{episodes.name}}</div>
                        <div><span style="font-family: SEGA LOGO FONT" class="black--text">Air Date: </span> {{episodes.air_date}}</div>
                        <div><span style="font-family: SEGA LOGO FONT" class="black--text">Created: </span> {{episodes.created | moment("dddd, MMMM Do YYYY")}}</div>
                    </v-card-text>
                </v-card>
                <h1>Characters</h1>
                <v-row justify="center">
                    <v-card
                            color='#78909C'
                            style="margin-top: 10px"
                            flat
                            ripple
                            shaped
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
        font-size: 50px;
        color: #455A64;
        position: relative;
        text-align: center;
    }

</style>