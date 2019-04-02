require('./bootstrap');

import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import store from './store/store';
import VueEvents from 'vue-events';
import Multiselect from 'vue-multiselect'

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/solid.css';

import Util from './util'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import Toasted from 'vue-toasted';

import Axios from 'axios'
Axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('access_token')}`;
Vue.prototype.$http = Axios;

Vue.use(VueMoment, {
    moment,
});
Vue.use(Util);
Vue.use(Vuex);
Vue.use(VueEvents);
Vue.use(Toasted,  {
    iconPack: 'custom-class'
});

Vue.component('multiselect', Multiselect);

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
