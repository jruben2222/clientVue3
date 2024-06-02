import { defineStore } from 'pinia'
import {ref} from 'vue';

export const useRegistrarStore=defineStore('registrar',() =>{
    const nombre=ref('');
    const correo=ref('');   

    const guardarRegistro=(nombreEnFormulario,correoEnFormulario)=>{
        nombre.value=nombreEnFormulario;
        correo.value=correoEnFormulario;
    };

    return {nombre,correo,guardarRegistro}
});


