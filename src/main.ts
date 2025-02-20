import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import StyleClass from 'primevue/styleclass';

import '@/assets/styles.scss';
import '@/assets/tailwind.css';

const app = createApp(App)

// Install Router for SPA
app.use(router)

// Make PrimeVue available throughout the project
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'system',
      cssLayer: false
    }
  }
});

// Add primevue directives
app.directive('styleclass', StyleClass);

// Add primefaces components
app.component('Card', Card)
app.component('Menubar', Menubar)
app.component('Button', Button)

app.mount('#app')
