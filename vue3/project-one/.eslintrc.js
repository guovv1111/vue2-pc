module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    singleQuote: 0,
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 'off'
  }
};
