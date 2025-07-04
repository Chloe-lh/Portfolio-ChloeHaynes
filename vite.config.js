import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  };

  if (command === 'build') {
    config.base = '/Portfolio-ChloeHaynes/';
  }

  return config;
});
