<script setup>
import Sidebar from '../components/Sidebar.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
   <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
        <RouterView />
    </div>
   </div>
</template>
<style>
.container {
    display: flex;
}

.content {
    flex:1;
    padding: 20px;
}
</style>
