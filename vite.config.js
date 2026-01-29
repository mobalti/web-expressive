import { defineConfig } from 'vite'
import { resolve, basename } from 'path'
import { glob } from 'glob'

export default defineConfig({
  esbuild: {
    legalComments: 'inline',
  },
  build: {
    // 1. Ensure CSS is split into individual files
    cssCodeSplit: true,
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync('lib/**/*.css')
          // FIX: Filter out internal files (starting with underscore)
          .filter(file => !basename(file).startsWith('_'))
          .map(file => [
            // Clean keys for Rollup (e.g., "components/button")
            file.replace(/^lib\//, '').replace(/\.css$/, ''),
            resolve(__dirname, file)
          ])
      ),
      output: {
        // FIX: Force assets to sit directly in dist/ without the lib/ prefix
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] || assetInfo.name || '';
          // Remove 'lib/' from the start of the name if Vite added it
          const cleanName = name.replace(/^lib\//, '');
          return cleanName;
        },
      }
    }
  }
})