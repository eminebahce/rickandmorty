<template>
    <div>
        <h1>List of Characters</h1>
        <ul v-for="character in characters" :key="character.id">
            <li>{{character.name}}</li>
        </ul>
        <p>{{info.count}}</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Characters",
        data: function () {
            return {}
        },
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