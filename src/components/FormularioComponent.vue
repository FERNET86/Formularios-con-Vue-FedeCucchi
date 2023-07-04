<template>
  <div>
    <h2>Formulario</h2>
    <form ref="formulario" @submit.prevent="submitForm">
      <label>Nombre:</label>
      <input v-model="nombre" type="text" required>

      <label>Apellido:</label>
      <input v-model="apellido" type="text" required>

      <label>Email:</label>
      <input v-model="email" type="email" required>

      <label>Password:</label>
      <input v-model="password" type="password" required>

      <button type="submit">Guardar</button>
    </form>

    <div v-if="showMessage">{{ successMessage }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormularioComponent',
  data() {
    return {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      showMessage: false,
      successMessage: '',
    };
  },
  methods: {
    submitForm() {
      const myForm = this.$refs.formulario;

      if (myForm && myForm.checkValidity) {
        if (myForm.checkValidity()) {
          const data = {
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            password: this.password,
          };
          this.$emit('formulario-enviado', data);
          this.successMessage = 'Los datos fueron guardados correctamente en la base, para más información visite http://localhost:8080/#/tabla.';
          this.showMessage = true;
          this.nombre = '';
          this.apellido = '';
          this.email = '';
          this.password = '';

          setTimeout(() => {
            this.showMessage = false;
            this.successMessage = '';
          }, 4000);
        } else {
          console.log('Datos inválidos. Verifica los campos del formulario.');
        }
      } else {
        console.log('Error: No se puede acceder a la validación del formulario.');
      }
    },
  },
};
</script>
