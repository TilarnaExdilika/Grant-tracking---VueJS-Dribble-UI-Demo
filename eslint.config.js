import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: ['@typescript-eslint'],
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
