// app.js

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);


import HomeComponent from './components/HomeComponent.vue';

import ButtonsComponent from './components/components/ButtonsComponent.vue';
import CardsComponent from './components/components/CardsComponent.vue';

import ColorComponent from './components/utilities/ColorComponent.vue';
import BorderComponent from './components/utilities/BorderComponent.vue';
import AnimationComponent from './components/utilities/AnimationComponent.vue';
import OtherComponent from './components/utilities/OtherComponent.vue';

import ChartsComponent from './components/ChartsComponent.vue';
import TabelsComponent from './components/TabelsComponent.vue';


const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'buttons',
      path: '/buttons',
      component: ButtonsComponent
  },
  {
      name: 'cards',
      path: '/cards',
      component: CardsComponent
  },
  {
      name: 'colors',
      path: '/colors',
      component: ColorComponent
  },
  {
    name: 'borders',
    path: '/borders',
    component: BorderComponent
  },
  {
    name: 'animations',
    path: '/animations',
    component: AnimationComponent
  },
  {
    name: 'other',
    path: '/other',
    component: OtherComponent
  },
  {
    name: 'charts',
    path: '/charts',
    component: ChartsComponent
  },
  {
    name: 'tabels',
    path: '/tabels',
    component: TabelsComponent
  },
];

const router = new VueRouter({mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
// const App = new Vue({
//     el: "#app",
//     router,
//     });
