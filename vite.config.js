import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Paradise-Nursery-Shopping-Application/',
  plugins: [react()],
})
