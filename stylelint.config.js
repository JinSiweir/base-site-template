module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  overrides: [
    {
      files: ['**/*.html', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};
