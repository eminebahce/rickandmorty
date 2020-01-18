import Vue from 'vue';
import App from './App.vue';
import store from '../src/store/index';
import router from '../src/router/index';
import vuetify from "./plugins/vuetify";
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
