const TsI18nWebpackPlugin = require("ts-i18n-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new TsI18nWebpackPlugin({
          inputDirectory: 'src/i18n',
          outputDirectory: 'src/i18n',
          defaultLanguage: 'en',
        }),
      ],
    },
  },
};
