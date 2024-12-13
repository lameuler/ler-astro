import { defineConfig } from 'astro/config';

const PORT = (() => {
    if (typeof process.env.PORT === 'string') {
        const parsed = parseInt(process.env.PORT)
        if (isFinite(parsed)) return parsed
    }
    return 2021 // default port
  })()
  
  // https://astro.build/config
  export default defineConfig({
    server: {
      port: PORT
    }
  });