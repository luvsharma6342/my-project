import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or another plugin for your framework
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/my-project/', // Replace with your repository name
});
