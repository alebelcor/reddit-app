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
