import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@store': '/src/store',
      '@hooks': '/src/hooks',
    }
  },
  plugins: [react()],
})
