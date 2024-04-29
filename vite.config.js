import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  bae: '/base64-to-image/',
  plugins: [vue()],
})
