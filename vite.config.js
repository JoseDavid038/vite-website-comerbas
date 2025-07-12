import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/vite-website-comerbas/' // para GitHub Pages
    : '/', // para desarrollo local, 
  server: {
    port: 5173, // You can change this to any port you like
    host: true, // important to allow external access
    allowedHosts: [
      '8e41d02f1dc5.ngrok-free.app' // <- your ngrok domain
    ]
  }
});
