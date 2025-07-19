import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

const deployTarget = process.env.DEPLOY_TARGET || 'local'; // local | github | hosting

export default defineConfig({
  base:
    deployTarget === 'github'
      ? '/vite-website-comerbas/'
      : '/', // para hosting o local

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        empresas: resolve(__dirname, 'empresas.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        ips: resolve(__dirname, 'ips.html'),
        expectativa: resolve(__dirname, 'expectativa.html'),
        expectativa2: resolve(__dirname, 'expectativa2.html')
      }
    }
  },

  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/*', dest: '' },
      ]
    })
  ],

  server: {
    port: 5173,
    host: true,
    allowedHosts: ['8e41d02f1dc5.ngrok-free.app']
  }
});
