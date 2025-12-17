import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
  },
  {
    name: 'app/files-to-lint',
    files: ['docs/**/*.{ts,mts,tsx}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/coverage/**', '**/node_modules/**', '**/.vitepress/cache/**', '**/.vitepress/.temp/**', '**/*.vue'],
  },
  ...tseslint.configs.recommended,
)
