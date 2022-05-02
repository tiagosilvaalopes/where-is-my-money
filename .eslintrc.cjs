/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        '#': 'prettier config in here :)',
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ]
  }
}
