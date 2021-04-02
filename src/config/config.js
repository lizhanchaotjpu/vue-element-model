module.exports = {
  title: '管理系统', // 系统名称
  routeModel: 'history', //路由模式
  routerWhiteList: ['/login'], // 路由白名单
  tokenName: 'token', // token名称
  timeOut: 60 * 1000, // 请求超时时间
  successCode: 200, // 请求正常code
  invalidCode: 401, // 无认证信息code
  build: {
    devPort: 8080, // 开发环境端口
    outputDir: 'dist', // 打包输出位置
    assetsDir: 'assets', // 打包输出静态资源位置
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    autoOpen: false // 是否自动打开页面
  },
  apiServer: {
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8', //application/json;charset=UTF-8
    development: 'http://192.168.31.58:9003/api',
    production: 'http://192.168.8.216:9005/api'
  },
  application: {
    placeholder: '---' //无效数据占位符
  }
}
