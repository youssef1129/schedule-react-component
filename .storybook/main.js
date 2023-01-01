module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};

config.module.rules = config.module.rules.filter(
  f => f.test.toString() !== '/\\.css$/'
);

config.module.rules.push(
  {
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader',
    ],
    include: path.resolve(__dirname, "../src"),
  }
)