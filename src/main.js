import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app');
