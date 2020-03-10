window._ = require('lodash');
window.axios = require('axios');

import Vue from 'vue'
import router from './router/router'
import store from './vuex/store'

import App from 'PAGE/App'

const app = new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  store,
});
