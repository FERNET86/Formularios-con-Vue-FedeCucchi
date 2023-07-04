import Vue from 'vue';
import VueRouter from 'vue-router';
import TablaUsuarios from './components/TablaUsuarios.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/tabla-usuarios',
    component: TablaUsuarios,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
