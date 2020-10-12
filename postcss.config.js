// https://nextjs.org/docs/advanced-features/customizing-postcss-config

module.exports = {
  plugins: {
    // https://tailwindcss.com
    'tailwindcss': {},

    // https://github.com/postcss/postcss-nested#options
    'postcss-nested': {},

    // https://github.com/luisrudge/postcss-flexbugs-fixes
    'postcss-flexbugs-fixes': {},

    // https://github.com/postcss/autoprefixer/#options
    'autoprefixer': {},
  },
};
