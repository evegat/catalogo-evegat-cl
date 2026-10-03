import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://catalogo.evegat.cl',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
