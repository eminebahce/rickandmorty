<template>
  <v-app :style="{'background-image': 'url(' + image + ')'}">
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
      return {
          image: 'https://cine.nl/wp-content/uploads/2017/11/RickMorty.jpg'
      }
    }
}
</script>

<style scoped>

</style>
