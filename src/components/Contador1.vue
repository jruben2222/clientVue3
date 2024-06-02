<script setup>
 import {ref} from 'vue'

 const contador=ref(0);

</script>
<template>
  <div>{{ contador }}</div> 
  <p><button @click="()=>contador++">Contador</button></p>
</template>
<style>

</style>
