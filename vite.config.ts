import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@lib': resolve(__dirname, './src/lib'),
      '@pages': resolve(__dirname, './src/pages'),
      '@types': resolve(__dirname, './src/types'),
      '@constants': resolve(__dirname, './src/constants'),
      '@utils': resolve(__dirname, './src/utils'),
      '@articles': resolve(__dirname, './src/articles'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'vendor-react': ['react', 'react-dom'],
          // Router
          'vendor-router': ['react-router-dom'],
          // Supabase client
          'vendor-supabase': ['@supabase/supabase-js'],
          // Stripe
          'vendor-stripe': ['@stripe/stripe-js'],
          // i18n
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Icons (lazy loaded)
          'vendor-icons': ['lucide-react'],
        },
        // Optimize chunk file names for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/').pop()?.replace('.tsx', '').replace('.ts', '')
            : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        // Asset file names
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop() || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // Entry file names
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Performance optimizations
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  server: {
    port: 5173,
    hmr: {
      overlay: true,
    },
    // Enable CORS for development
    cors: true,
  },
  preview: {
    port: 4173,
    cors: true,
  },
  // Environment variable prefix
  envPrefix: 'VITE_',
});
