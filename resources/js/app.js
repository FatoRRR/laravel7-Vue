window._ = require('lodash');
window.axios = require('axios');

import Echo from 'laravel-echo';

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    auth: {
      headers: {
          Authorization: 'Bearer ' + localStorage.token,
      },
    },
});

import Vue from 'vue'
import router from './router/router'
import store from './vuex/store'

import App from 'PAGE/App'

Vue.component('icon', () => import('ATOM/Icon'))
Vue.component('btn', () => import('ATOM/Button'))
Vue.component('v-input', () => import('ATOM/Input'))
Vue.component('modal', () => import('MOLECULE/Modal'))
Vue.component('fab', () => import('ATOM/FloatingActionButton'))

const app = new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  store,
});
