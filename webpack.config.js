const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined; 

module.exports = {
    mode, 
    target,
    devtool,
    devServer : {
      port: 5000,
      open: true,
      hot: true,
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    output:{
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new MiniCssExtractPlugin({
          filename: 'style[contenthash].css',
        })
    ],
    module: {
        rules: [
          //html loader
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          //scss loader
          {
            test: /\.(c|sa|sc)ss$/i,
            use: [
              devMode ? "style-loader": MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
              ],
          },
          // fonts
          {
            test: /\.(ttf)/i,
            type: 'asset/resource',
            generator:{
              filename: 'fonts/[name][ext]'
          }
          },
          // babel
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },

        ],
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
}