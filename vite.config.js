import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"-PROJECT-1/game/-",
  plugins: [react()],
})
