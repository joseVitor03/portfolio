import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import ViteSitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteSitemap({
      siteUrl: 'https://portfolio-jose-vitor-projects.vercel.app',
      outDir: 'public', // Onde o sitemap.xml e robots.txt serão gerados
    }),
  ],
})
