<template>
    <v-app :style="{'background-image': 'url(' + require('./assets/background.jpg') + ')' }">
        <v-container>
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'app',
        data: () => {
            return {}
        }
    }
</script>

<style scoped>
</style>
