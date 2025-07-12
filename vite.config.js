import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path'


export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/vite-website-comerbas/' // para GitHub Pages
    : '/', // para desarrollo local, 
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        empresas: resolve(__dirname, 'empresas.html'),
        nosotros: resolve(__dirname, 'ips.html'),
        contacto: resolve(__dirname, 'nosotros.html')
      }
    }
  },
    plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/*', dest: '' }, // para asegurarte de que archivos de public se copien si es necesario
      ]
    })
    ],
    server: {
      port: 5173, // You can change this to any port you like
      host: true, // important to allow external access
      allowedHosts: [
        '8e41d02f1dc5.ngrok-free.app' // <- your ngrok domain
      ]
    }
  });
