 import * as yup from 'yup';

 export const schema=yup.object({
    nombre:yup.string().required('El nombre es requerido'),
    correo:yup.string().email('No es un corre válido.').required('El correo es requerido')
 });