const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包后dist 增加html文件插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')// 压缩（丑化）js代码插件
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/',// 打包后所有的图片位置加一个dist/路径
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // \.对我的. 进行转义， 匹配所有的css文件
        //   css-loader只负责css文件进行加载
        //  style-loader 负责将样式添加到DOM中
        // 使用多个loader时，是从右向左加载
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            // 当图片小于limit时，会将图片编译成base64字符串形式
            // 当图片大于limit时，需要加载file-loader
            options: {
              limit: 13000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        //exclude 排除node_modules和bower_components文件内的进行转化
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: { // 解决
    //alias别名
    extensions: ['.vue', '.js', '.css'], //文件中引入文件时不用写这些文件类型的后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin(` 
            (c) 2021/8/22 张森云
            Released under the MIT License.`),// webpack内含的头部注释插件
    new HtmlWebpackPlugin({
      template: 'index.html'// 设置以index.html为模板（主要是想加入id=app代码部分）
    }),
    // 开发阶段不建议使用丑化代码，方便检查
    // new UglifyjsWebpackPlugin(), // js丑化插件，会把前面注释删掉
  ],
  devServer: { //本地开发服务器
    contentBase: './dist', // 服务于那个文件夹，为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    inline: true, //是否需要实时的监听
  }
}
