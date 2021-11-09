const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // main script file path (js or ts)
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: { minimize: true } // minimize: Make one line
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // read public/index.html
      filename: 'index.html'
    })
  ]
};