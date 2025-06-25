import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // https://vitejs.dev/config/server-options.html
    strictPort: true,
    proxy: {
      '/docs': {
        target: 'http://localhost:5174',
        changeOrigin: true,
        secure: false,
        xfwd: true,
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.log('Proxy Error', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('Proxy Request to Backend:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Proxy Response from Backend:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
})
