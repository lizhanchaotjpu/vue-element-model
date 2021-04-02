const {
  autoOpen,
  assetsDir,
  outputDir,
  devPort,
  publicPath
} = require('./src/config/config').build
module.exports = {
  // 基本相对路径 baseUrl从 Vue CLI 3.3 起已弃用使用publicPath来替代。
  publicPath,
  // 构建输出目录（打包位置）
  outputDir,
  // assetsDir 放置生成的静态资源 (js、css、img、fonts) 的目录
  assetsDir,
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    open: autoOpen, // 设置自动打开
    host: '0.0.0.0',
    port: devPort, // 设置端口
    proxy: {
      // 设置代理
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        secure: false, // 如果是http接口，需要配置该参数
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/sass/variables.scss";'
      }
    }
  }
}
