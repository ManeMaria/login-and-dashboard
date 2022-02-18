/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },

    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
