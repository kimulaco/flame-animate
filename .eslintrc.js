module.exports = {
  extends: [
    'eslint:recommended'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: [2, 2]
  },
  overrides: [
    {
        files: [
          '*.ts'
        ],
        extends: [
          'plugin:@typescript-eslint/recommended'
        ],
        parser: '@typescript-eslint/parser',
        plugins: [
          '@typescript-eslint'
        ],
        rules: {
          '@typescript-eslint/member-delimiter-style': 0,
          '@typescript-eslint/explicit-function-return-type': 0
        }
    }
  ]
}
