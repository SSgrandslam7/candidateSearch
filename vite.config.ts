/// <reference types="node" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const renderHost = "candidatesearch-bopm.onrender.com";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  preview: {
    port: parseInt(process.env.PORT || '4173'),
    host: true,
    allowedHosts: [renderHost],
  },
});
