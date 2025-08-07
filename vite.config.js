// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/e-plantShopping/", // ← EXACTLY this if your repo is named e-plantShopping
  plugins: [react()],
})
