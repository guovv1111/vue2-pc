const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, // 默认打开浏览器
    host: "localhost", // 配置hostname
  },
  publicPath: "./", // 将根目录修改为当前目录，解决打包后空白页问题
});
