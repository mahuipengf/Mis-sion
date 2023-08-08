const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
//   entry: './index.js', // 单入口文件
  entry: {
    index: './index.js',
    print: './print.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `start-h-[chunkhash].js`,
    // clear: true,
  },
  devtool: 'inline-source-map', // inline-source-map 本地开发时启用可准确找到打包报错文件
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpeg|gif)$/i,
        type: 'asset/resource', // webpack 内置asset module 该type类型可最后编译为url 
        generator: {
            filename: 'static/[hash][ext][query]' // 指定打包的目录 及打包文件重新命名
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 加载字体文件
        type: 'asset/resource',
        generator: {
            filename: 'font/[hash][ext][query]', // 指定打包目录 及打包文件重命名
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 使用MiniCssExtractPlugin 插件提取css文件
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HtmlWebpackPlugin',
      template: './index.html', // 更改文件
    //   filename: 'demo.html', // 打包后新文件
    }),
    // new MiniCssExtractPlugin({
    //     filename: 'css/start-h-[chunkhash].css' // 重命名css文件
    // }), // 使用MiniCssExtractPlugin 插件提取css文件
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    runtimeChunk: 'single',
  }
};
