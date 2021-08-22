// prod.config.js
// 放一些生产时需要用到的东西
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')// 压缩（丑化）js代码插件
const webpackMerge = require('webpack-merge') // 导入安装好的webpack-merge依赖
const baseConfig = require('./base.config') // 导入baseConfig
module.exports = webpackMerge(baseConfig, {
  plugins: [
    // 开发阶段不建议使用丑化代码，方便检查
    new UglifyjsWebpackPlugin(), // js丑化插件，会把前面注释删掉
  ],
})