import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from 'vite-plugin-pwa';
import pwaConfig from './src/PWAconfig'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA(pwaConfig)
  ],
})
