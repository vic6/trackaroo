const path = require('path');

module.exports = {
  entry: './src/playground/redux-trackaroo.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
};
