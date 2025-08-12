import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,  // listen on all IPs, not just localhost
    port: 3000,   // optional: specify port or leave default
  },
})
