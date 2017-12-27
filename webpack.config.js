const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("/style/style.css")

module.exports = {
  entry: './src/app.jsx',
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
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: ["css-loader"]
        })
      }
    ],
  },
  plugins: [CSSExtract],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
};
