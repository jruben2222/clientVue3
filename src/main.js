import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

import { router } from './routers';

const pinia = createPinia()
//createApp(App).mount('#app')
const app = createApp(App);

app.use(router);
app.use(pinia); 

app.mount('#app');