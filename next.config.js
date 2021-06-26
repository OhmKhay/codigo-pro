const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack(config, ...args) {
    config = withSass().webpack(config, ...args);
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // config for images
 
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'static',
      },
    });



    // config for url images
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config = withFonts().webpack(config, ...args);

    if (!args.isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config;
  }
};
