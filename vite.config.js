
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/e-plantShopping/', // <-- this is critical for GitHub Pages
  plugins: [react()]
});
