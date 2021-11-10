const path = require('path');
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'out'
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