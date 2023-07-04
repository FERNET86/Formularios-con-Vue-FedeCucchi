<template>
  <div>
    <h2>Tabla</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datos" :key="index">
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TablaComponent',
  computed: {
    datos() {
      return this.$store.getters.obtenerDatos;
    },
  },
  created() {
    this.$store.dispatch('obtenerDatosDeAPI');
  },
};
</script>
