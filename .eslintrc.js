const restrictedGlobals = require('confusing-browser-globals');

// https://eslint.org/docs/user-guide/configuring
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
    'es6': true,
    'jest/globals': true,
    'node': true,
  },

  settings: {
    'import/extensions': ['.js', '.jsx'],

    'import/resolver': {
      'babel-module': {},
    },

    'react': {
      version: 'detect',
    },
  },

  plugins: [],

  // The order of these matters.
  extends: [
    // https://eslint.org/docs/rules/
    'eslint:recommended',

    // https://github.com/benmosher/eslint-plugin-import
    'plugin:import/recommended',

    // https://github.com/yannickcr/eslint-plugin-react
    'plugin:react/recommended',

    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',

    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',

    // https://github.com/jest-community/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',

    // https://github.com/testing-library/eslint-plugin-jest-dom
    'plugin:jest-dom/recommended',

    // https://github.com/testing-library/eslint-plugin-testing-library
    'plugin:testing-library/react',

    // https://github.com/prettier/eslint-plugin-prettier
    // https://github.com/prettier/eslint-config-prettier
    // These need to be last so they get a chance to override other configs.
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],

  rules: {
    //
    // ESLint
    // https://eslint.org/docs/rules/
    //

    // Enforce `return` statements in callbacks of array methods
    'array-callback-return': 'warn',

    // Require `default` cases in `switch` statements
    'default-case': ['warn', { commentPattern: '^no default$' }],

    // Generally require the use of `===` and `!==`
    'eqeqeq': ['warn', 'smart'],

    // Require parentheses when invoking a constructor with no arguments
    'new-parens': 'warn',

    // Disallow `Array` constructors
    'no-array-constructor': 'warn',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'warn',

    // Disallow the use of `eval()`
    'no-eval': 'warn',

    // Disallow extending native types
    'no-extend-native': 'warn',

    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'warn',

    // Disallow unnecessary labels
    'no-extra-label': 'warn',

    // Disallow the use of `eval()`-like methods
    'no-implied-eval': 'warn',

    // Disallow the use of the `__iterator__` property
    'no-iterator': 'warn',

    // Disallow labels that share a name with a variable
    'no-label-var': 'warn',

    // Disallow labeled statements
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'warn',

    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'warn',

    // Disallow multiline strings
    'no-multi-str': 'warn',

    // Disallow `new` operators with the `Function` object
    'no-new-func': 'warn',

    // Disallow `Object` constructors
    'no-new-object': 'warn',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'warn',

    // Disallow octal escape sequences in string literals
    'no-octal-escape': 'warn',

    // Disallow `javascript:` urls
    'no-script-url': 'warn',

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'warn',

    // Disallow comma operators
    'no-sequences': 'warn',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'warn',

    // Disallow throwing literals as exceptions
    'no-throw-literal': 'warn',

    // Disallow specified global variables
    'no-restricted-globals': ['error'].concat(restrictedGlobals),

    // Disallow unused expressions
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // Disallow the use of variables before they are defined
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'warn',

    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'warn',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'warn',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],

    // Disallow whitespace before properties
    'no-whitespace-before-property': 'warn',

    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['warn', 'never'],

    // Require semicolons instead of ASI
    'semi': ['error', 'always'],

    // Disallow strict mode directives
    'strict': ['warn', 'never'],

    // Disallow Unicode byte order mark (BOM)
    'unicode-bom': ['warn', 'never'],

    //
    // eslint-plugin-import
    // https://github.com/benmosher/eslint-plugin-import
    //

    // Disallow AMD `require` and `define` calls
    'import/no-amd': 'error',

    // Require all imports appear before other statements
    'import/first': 'error',

    // Disallow anonymous values as default exports
    'import/no-anonymous-default-export': 'warn',

    // Disallow Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    //
    // eslint-plugin-react
    // https://github.com/yannickcr/eslint-plugin-react
    //

    // Disallow using another component's propTypes
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

    // Require PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'warn',

    // Disallow common typos
    'react/no-typos': 'error',

    // Disable checking for `React` being in scope when using JSX Next.js imports React for you
    'react/react-in-jsx-scope': 'off',

    // Require `style` prop value is an object
    'react/style-prop-object': 'warn',

    //
    // eslint-plugin-jsx-a11y
    //

    // Disable `<a>` not having `href` attribute violations for <Link>s
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
