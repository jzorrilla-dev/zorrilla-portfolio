import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

export default defineConfig({
  // El plugin de Astro/Vite debería detectar automáticamente los archivos de configuración
  integrations: [react()],
  devToolbar: {
    enabled: false
  }
})
