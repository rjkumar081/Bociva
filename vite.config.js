import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: if you host on GitHub Pages under a repo named "MeraPopi-Digital-Seva-Center"
// keep base as below. If you change the repo name, update base accordingly.
export default defineConfig({
  plugins: [react()],
  base: '/MeraPopi-Digital-Seva-Center/',
})
