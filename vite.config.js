import { fileURLToPath, URL } from 'node:url'
import fs from 'fs';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:8843',
        changeOrigin: true,
        secure: false, // Для самоподписанных сертификатов
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
})
