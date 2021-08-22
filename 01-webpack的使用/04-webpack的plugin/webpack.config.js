const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',// 打包后所有的图片位置加一个dist/路径
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
  }
}
