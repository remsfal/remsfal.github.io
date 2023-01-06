import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css';
import './assets/main.css'

const app = createApp(App)

// Install Router for SPA
app.use(router)
// Make PrimeVue available throughout the project
app.use(PrimeVue)
// Add primefaces components
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Button', Button)

app.mount('#app')
