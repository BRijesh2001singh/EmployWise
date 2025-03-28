import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  server: {
    historyApiFallback: true, // Ensures React Router works in dev
  },
  build: {
    outDir: 'dist',
  }
})
