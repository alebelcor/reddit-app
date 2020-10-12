// INFO: https://github.com/okonet/lint-staged

module.exports = {
  '*.css': 'stylelint --fix',

  '*.{js,jsx}': ['pretty-quick --staged', 'eslint --ext .jsx,.jsx --fix'],
};
