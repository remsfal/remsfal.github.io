import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
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

// Ensure `html.app-dark` is present when the user prefers dark mode so
// our `:root[class*='app-dark']` selectors and Tailwind's selector-based
// dark mode take effect. PrimeVue may not add the class to the root
// element, so we add a small fallback here.
if (typeof window !== 'undefined' && window.matchMedia) {
  const media: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  const applyAppDarkClass = (isDark: boolean): void => {
    if (isDark) document.documentElement.classList.add('app-dark');
    else document.documentElement.classList.remove('app-dark');
  };

  // apply initial value
  try {
    applyAppDarkClass(!!media.matches);
  } catch (e) {
    // ignore
  }

  // listen for changes
  if (typeof (media as any).addEventListener === 'function') {
    media.addEventListener('change', (e: MediaQueryListEvent) => applyAppDarkClass(!!e.matches));
  } else if (typeof (media as any).addListener === 'function') {
    // older browsers — addListener's callback typing varies, use any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (media as any).addListener((e: any) => applyAppDarkClass(!!e.matches));
  }
}

app.mount('#app')
