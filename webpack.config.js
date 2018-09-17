const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = (env) => {
  console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
  console.log('Production: ', env.production); // true
  return {
    entry: `${SRC_DIR}/index.jsx`,
    output: {
      filename: 'bundle.js',
      path: DIST_DIR,
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          include: SRC_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          },
        },
      ],
    },
  };
};
