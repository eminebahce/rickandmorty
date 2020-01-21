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
          image: 'https://st2.depositphotos.com/5623324/8241/v/600/depositphotos_82411380-stock-video-cartoon-moon-in-the-night.jpg'
      }
    }
}
</script>

<style scoped>

</style>
