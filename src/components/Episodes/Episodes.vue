<template>
    <div>
        <h1>Lists of Episodes</h1>
        <ul v-for="episode in episodes" :key="episode.id">
            <li>{{episode.name}}</li>
        </ul>
        <p>{{info.pages}}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Episodes",
        data: function () {
            return {

            }
        },
        methods: {},
        computed: {
            ...mapState({
                episodes: state => state.episodes.episodes,
                info: state => state.episodes.info
            })
        },
        created() {
            this.$store.dispatch('loadEpisodes');
        }
    }
</script>

<style scoped>

</style>