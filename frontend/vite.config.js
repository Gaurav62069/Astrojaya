import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ye line add karni hai
  ],
  server: {
    allowedHosts: [
      '0157fb648847.ngrok-free.app'
    ]
  }
})