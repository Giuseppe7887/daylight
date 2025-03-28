import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa';
import {pwaConfig} from './src/constants'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA(pwaConfig as Partial<VitePWAOptions>)
  ],
})
