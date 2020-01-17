<template>
    <div>
        <h1>Lists of Locations</h1>
        <ul v-for="location in locations" :key="location.id">
            <li>{{location.name}}</li>
        </ul>
        <p>{{info.pages}}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Locations",
        data: function () {
            return {

            }
        },
        methods: {},
        computed: {
            ...mapState({
                locations: state => state.locations.locations,
                info: state => state.locations.info
            })
        },
        created() {
            this.$store.dispatch('loadLocations')
        }
    }
</script>

<style scoped>

</style>