<script setup>
 import {Form, Field,ErrorMessage} from 'vee-validate'
 import {schema} from  '../schemas/validationSchema.js'
 import {ref} from 'vue';
 import {storeToRefs} from 'pinia';

 import {useRegistrarStore} from '../stores/registrarStore';

 //const {nombre,correo,guardarRegistro} = storeToRefs(useRegistrarStore)

const registrarStore=useRegistrarStore();

const nombre=ref('')
const correo=ref('')

 const onSubmit=() => {
  registrarStore.guardarRegistro(nombre.value,correo.value);
  console.log('submitted');
 }
</script>

<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre:</label>
        <Field type="text" v-model="nombre" id="nombre" name="nombre" placeholder="ingrese su nombre" />
        <ErrorMessage name="nombre" class="error" />
      </div>
      <div class="form">
        <label for="correo">Correo:</label>
        <Field type="email" v-model="correo" id="correo" name="correo" placeholder="ingrese su correo" />
        <ErrorMessage name="correo" class="error" />
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.form{
  margin-bottom: 10px;
}
.error{
  color: red;
}
</style>