// vitest.config.ts
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      root: fileURLToPath(new URL('./', import.meta.url)),
      environment: 'jsdom',
      globals: true,
      mockReset: true,
      restoreMocks: true,
      clearMocks: true,
      exclude: [...configDefaults.exclude],
      coverage: {
        reporter: ['lcov', 'text', 'json', 'html'],
        exclude: [
          ...configDefaults.exclude,
          'tailwind.config.{js,cjs}',
          'postcss.config.{js,cjs}',
          'vite.config.{js,ts}',
          '**/*.d.ts',
        ],
      },
    },
  }),
)
