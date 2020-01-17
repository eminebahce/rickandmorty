import Vue from 'vue';
import App from './App.vue';
import store from '../src/store/index'
import router from '../src/router/index'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
