import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // The prerender build (src/entry-server.jsx) bundles its dependencies so it
    // runs in plain Node without depending on how each package publishes ESM.
    noExternal: true,
  },
})
