module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    // 'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
  ecmaVersion:  2018,
  sourceType:  'module',
  ecmaFeatures:  {
    jsx:  true,
  },
  },
  rules:  {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error'
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
