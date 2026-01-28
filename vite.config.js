// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rts-clone/', // GitHub Pages base path
  css: {
    postcss: './postcss.config.js', // ← Asegura que Vite use PostCSS
  },
 build: {
    outDir: 'docs', // ✅ CAMBIA esto de (dist) a 'docs'
    assetsDir: 'assets',
    emptyOutDir: true, // ✅ Añade esto para limpiar docs/ antes de cada build
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})