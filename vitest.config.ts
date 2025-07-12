import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        reporter: ['lcov', 'text', 'json', 'html'],
      },
      environment: 'jsdom',
      globals: true,
      mockReset: true,
      restoreMocks: true,
      clearMocks: true,
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)