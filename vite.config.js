import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: base must match your repo name exactly (case-sensitive)
export default defineConfig({
  plugins: [react()],
  base: '/MeraPopi-Digital-Seva-Center/',
})
