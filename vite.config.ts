import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  // Relative URLs so the build works from any sub-path on a static host
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    // Vue rarely changes while the tutorial content does: keep it in its own
    // chunk so returning visitors only re-download the small app chunk.
    rollupOptions: {
      output: {
        manualChunks: { vue: ['vue'] },
      },
    },
  },
})
