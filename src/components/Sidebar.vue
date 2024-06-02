<template>
  <div class="sidebar">
    <h2>Bienvenido(a)</h2>
    <h3>{{ nombre }}</h3>
    <h3>{{ correo }}</h3>
   <ul>
    <li><router-link to="/contador">Contador</router-link></li>
    <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
    <li><router-link to="/registrar">Registar</router-link></li>
   </ul>
  </div>
  
</template>

<script setup>
 import {ref, watch} from 'vue'
 import {useRegistrarStore} from '@/modules/registro/stores/registrarStore';

 const registarStore=useRegistrarStore();

 const nombre=ref(registarStore.nombre);
 const correo=ref(registarStore.correo);
//escuadores
watch(()=>registarStore.correo,(nevoValor)=>{
    correo.value=nevoValor;
})
watch(()=>registarStore.nombre,(nevoValor)=>{
    nombre.value=nevoValor;
})

</script>

<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding:20px;
}
</style>