<template>
    <v-container>
        <v-row>
            <v-col
                    :key="character.id"
                    cols="12"
                    sm="4"
                    v-for="character in characters"
            >
                <v-card
                        color='#263238'
                        dark
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title
                                    v-text="character.name"
                            >
                            </v-card-title>
                            <v-card-subtitle v-text="character.status"></v-card-subtitle>
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
    </v-container>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Characters",
        data: () => ({}),
        methods: {},
        computed: {
            ...mapState({
                characters: state => state.characters.characters,
                info: state => state.characters.info
            })
        },
        created() {
            this.$store.dispatch('loadCharactersAndInfo');
        }
    }
</script>

<style scoped>
</style>