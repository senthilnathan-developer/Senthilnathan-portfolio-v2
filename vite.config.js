// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ Keep this for Netlify
  plugins: [react()],
})
