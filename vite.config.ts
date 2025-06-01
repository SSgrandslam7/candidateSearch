/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const renderHost = 'https://candidatesearch-bopm.onrender.com';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: true,
    allowedHosts: [renderHost],
  },
});
