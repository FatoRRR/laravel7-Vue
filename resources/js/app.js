window._ = require('lodash');
window.axios = require('axios');

import Vue from 'vue'
import router from './router/router'
import store from './vuex/store'

import App from 'PAGE/App'

Vue.component('icon', () => import('ATOM/Icon'))
Vue.component('btn', () => import('ATOM/Button'))
Vue.component('v-input', () => import('ATOM/Input'))
Vue.component('modal', () => import('MOLECULE/Modal'))

const app = new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  store,
});
