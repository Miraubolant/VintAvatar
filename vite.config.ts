import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js'],
          stripe: ['@stripe/stripe-js'],
          router: ['react-router-dom'],
        },
      },
    },
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 5173,
    hmr: {
      overlay: true,
    },
  },
});
