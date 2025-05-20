import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5173, // You can change this to any port you like
    host: true, // important to allow external access
    allowedHosts: [
      '0e35-186-30-185-87.ngrok-free.app' // <- your ngrok domain
    ]
  }
});
