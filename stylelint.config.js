// INFO: https://stylelint.io/user-guide/configure

module.exports = {
  extends: [
    // INFO: https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',

    // INFO: https://github.com/constverum/stylelint-config-rational-order
    'stylelint-config-rational-order',
  ],

  rules: {
    // INFO: Disable violation for unknown Tailwind's directives (i.e. at-rules)
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // https://tailwindcss.com/docs/functions-and-directives
          'tailwind',
          'apply',
          'layer',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],

    // INFO: Ensure camel case naming for class selectors
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$',
      {
        message: 'Expected class selector to follow camel case convention',
      },
    ],
  },
};
