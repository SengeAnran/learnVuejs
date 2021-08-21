const path = require('path') // 前提 npm init 生成node 的 package.json文件
module.exports = {
  entry: './src/main.js',// 入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'), //动态获取绝对路径（node语法）
    //resolve 两个路径进行拼接 __dirname 保存webpack.config.js所在路径
    filename: "bundle.js" //打包后的文件名字
  }
}