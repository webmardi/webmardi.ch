const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  },
  webpack(config) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      fallback: { fs: false, module: false },
    };

    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
  env: {},
  compress: true,
});