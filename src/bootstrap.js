
 // Importa Vue primeiramente. const não exportada
import Vue from 'vue';

window.Vue = require('vue');
window._ = require('lodash');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import cssVars from 'css-vars-ponyfill'
import 'core-js/es6/promise';
import 'core-js/es6/string';
import 'core-js/es7/array';

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
