import Vue from 'vue';
import App from './App.vue';
import store from './store'; // Importar el store de Vuex

import VueRouter from 'vue-router';
import FormularioComponent from './components/FormularioComponent.vue';
import TablaComponent from './components/TablaComponent.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: FormularioComponent },
  { path: '/tabla', component: TablaComponent },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  store, // Asignar el store de Vuex
  router, // Asignar el router
  render: (h) => h(App),
}).$mount('#app');
