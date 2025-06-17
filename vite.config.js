import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5173, // You can change this to any port you like
    host: true, // important to allow external access
    allowedHosts: [
      '57ae-186-29-36-159.ngrok-free.app' // <- your ngrok domain
    ]
  }
});
