// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add your custom module resolver configuration
  config.resolve = {
    ...config.resolve,
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      // Add more aliases as needed
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  };

  return config;
};
