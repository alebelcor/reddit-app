module.exports = {
  presets: ['next/babel'],

  plugins: [
    [
      'inline-react-svg',
      {
        // INFO: Ensure all HTML attributes are kept
        svgo: {},
      },
    ],

    // INFO: Needed for resolving paths in tests
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
};
