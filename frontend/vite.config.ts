
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      src: path.resolve(__dirname, './'),
      containers: path.resolve(__dirname, './src/containers'), //
      components: path.resolve(__dirname, './src/components'), //
      api: path.resolve(__dirname, './src/api'), //
    },
  },
})
