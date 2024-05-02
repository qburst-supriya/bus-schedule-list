import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import.meta.env
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/some-base/',
});
