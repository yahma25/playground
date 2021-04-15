const path = require('path');

module.exports = {
  // main javascript file path
  entry: './public/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};