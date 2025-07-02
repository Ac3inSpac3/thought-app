import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Replace 'your-username' and 'thought-app' accordingly
export default defineConfig({
  plugins: [react()],
  base: '/thought-app/', // GitHub Pages needs this
})

