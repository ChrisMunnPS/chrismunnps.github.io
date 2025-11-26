import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For User Pages (https://<username>.github.io), base should be '/'
  // For Project Pages (https://<username>.github.io/<repo>), base should be '/<repo>/'
  base: '/', 
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
