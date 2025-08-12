import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use a relative path './' to ensure all asset links are correct on GitHub Pages.
  base: './',
  plugins: [react()],
})
