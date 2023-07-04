import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datos: [],
    mensajeConfirmacion: null,
  },
  mutations: {
    setDatos(state, datos) {
      state.datos = datos;
    },
    agregarDato(state, dato) {
      state.datos.push(dato);
    },
    setMensajeConfirmacion(state, mensaje) {
      state.mensajeConfirmacion = mensaje;
    },
  },
  actions: {
    async obtenerDatosDeAPI({ commit }) {
      try {
        const response = await fetch('https://64a246f4b45881cc0ae4f33d.mockapi.io/api/v1/users');
        const data = await response.json();
        commit('setDatos', data);
      } catch (error) {
        console.log(error);
      }
    },
    async agregarDato({ commit }, dato) {
      try {
        const response = await fetch('https://64a246f4b45881cc0ae4f33d.mockapi.io/api/v1/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dato),
        });
        const nuevoDato = await response.json();
        commit('agregarDato', nuevoDato);
        commit('setMensajeConfirmacion', 'Los datos fueron guardados correctamente en la base, para mas informacion visite http://localhost:8080/#/tabla.');
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    obtenerDatos: (state) => state.datos,
    obtenerMensajeConfirmacion: (state) => state.mensajeConfirmacion,
  },
});

