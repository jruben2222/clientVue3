import { createRouter, createWebHistory } from 'vue-router';

//import { useAuthStore } from '@/stores'; //usan pinia
//import { MainView/*, LoginView */} from '@/views';

import MainView from '../views/MainView.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: MainView },
        { path: '/contador',name:'contador', component: ()=>import('../components/Contador1.vue') },
        { path: '/lista-de-tareas', name:'lista-de-tareas',component: ()=>import('../components/ListaDeTareas.vue') },
        //{ path: '/login', component: LoginView }
    ]
});

// router.beforeEach(async (to) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/login'];
//     const authRequired = !publicPages.includes(to.path);
//     const auth = useAuthStore();

//     if (authRequired && !auth.user) {
//         auth.returnUrl = to.fullPath;
//         return '/login';
//     }
// });