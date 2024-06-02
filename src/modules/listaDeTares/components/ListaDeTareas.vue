<script setup>
import {ref} from "vue";

const tareas=ref([]);
const nuevaTarea=ref('');

const agregarTareas=()=>{

    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value="";
};

const borrarTarea=(index)=>{

tareas.value.splice(index,1); //el index como elemento de unico , 1 indica  que se va a borrar un solo elemento

};

</script>
<template>
  <div>
    <h2>Lista tarea</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="agregarTareas">
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }} <button @click="borrarTarea">X</button>

    </li>
  </ul>
  </div>
</template>
<style>

</style>
