import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'HrnetModal',
      fileName: (format) => `hrnet-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
