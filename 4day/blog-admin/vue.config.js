module.exports = {
  //设置项目打包时的路径
  publicPath: "./",
  //开发服务器 / 脚手架服务器
  devServer: {
    port: 9999, //端口号
    open: true, //项目启动完成时自动打开浏览器加载项目
    host: "localhost", //主机名
    https: false //是否开启https协议
  },
  //关闭eslint
  lintOnSave: false,
  // 打包时, 不生成 .map 文件, 加快打包构建
  productionSourceMap: false,
}
