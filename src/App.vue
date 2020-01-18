<template>
  <v-app>
      <h1>Rick And Morty</h1>
      <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app',
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
      position: relative;
      margin: auto;
      padding: 50px 0px 0px 0px;
  }
</style>
