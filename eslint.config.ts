import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import nuxtUI from '@nuxt/ui/eslint'

export default ts.config(
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
      'no-undef': 'off'
    }
  },
  ...nuxtUI({
    entryPoint: 'src/assets/css/main.css',
    colors: { primary: 'green', neutral: 'zinc' },
    rules: {
      'no-unknown-classes': 'error',
      'no-conflicting-classes': 'error',
      'no-palette-colors': 'error'
    }
  })
)
