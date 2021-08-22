// 放一些开发时需要用到的东西
const webpackMerge = require('webpack-merge') // 导入安装好的webpack-merge依赖
const baseConfig = require('./base.config')
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin"); // 导入baseConfig
module.exports = webpackMerge(baseConfig, {
  devServer: { //本地开发服务器
    contentBase: './dist', // 服务于那个文件夹，为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    inline: true, //是否需要实时的监听
  }
})
