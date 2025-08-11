import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' path must match your repository name exactly.
  base: '/e-plantShopping/',
  plugins: [react()],
})
