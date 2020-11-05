const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = true;

module.exports = {
  entry: {
    portfolio: [
      './Portfolio.jsx'
    ],
    'contact-form': [
      './ContactForm.jsx'
    ],
  },
  output: {
    path: path.resolve(__dirname, "../assets/js/"),
    filename: 'react-[name].min.js'
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: path.join(__dirname, './'),
        exclude: /node_modules/,
        options: {
          presets: ['@babel/react']
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader'
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              modules: {
                localIdentName: "[local]--[hash:base64:10]",
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
