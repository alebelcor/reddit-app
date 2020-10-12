// INFO: https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jest/globals': true,
  },

  settings: {
    //   'import/resolver': {
    //     node: {
    //       paths: ['src'],
    //     },
    //   },

    react: {
      version: 'detect',
    },
  },

  plugins: [
    // 'prettier',
    // 'react',
  ],

  // The order of these matters.
  extends: [
    // INFO: https://eslint.org/docs/rules/
    'eslint:recommended',

    // INFO: https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',

    // INFO: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',

    // INFO: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',

    // INFO: https://github.com/jest-community/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',

    // INFO: https://github.com/testing-library/eslint-plugin-jest-dom
    'plugin:jest-dom/recommended',

    // INFO: https://github.com/testing-library/eslint-plugin-testing-library
    'plugin:testing-library/react',

    // INFO: https://github.com/prettier/eslint-plugin-prettier
    // INFO: https://github.com/prettier/eslint-config-prettier
    // These need to be last so they get a chance to override other configs.
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],

  rules: {
    //
    // ESLint
    //

    // Disallow missing semicolons.
    'semi': ['error', 'always'],

    //
    // eslint-plugin-jsx-a11y
    //

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    //
    // eslint-plugin-react
    //

    // Disable checking for `React` being in scope when using JSX Next.js imports React for you.
    'react/react-in-jsx-scope': 'off',
  },
};
