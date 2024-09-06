import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/individualSite/', // Set the correct base path for deployment (e.g., to GitHub Pages)
  server: {
    port: 3000, // Specify your desired port number for the development server
  },
});
