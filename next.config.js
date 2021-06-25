const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const path = require('path');


module.exports = {
  webpack(config, ...args) {
    config = withSass().webpack(config, ...args);
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
    ];

    config = withFonts().webpack(config, ...args);

    if (!args.isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config;
  }
};
