//引入express模块
const express = require('express')
//引入webpack模块
const webpack = require('webpack')
//引入webpack-dev-middleware,热重载中间件
const webpackDevMiddleware = require("webpack-dev-middleware")

//生成express服务器
const app = express()
//引入webpack配置文件（js对象）
const config = require('./webpack.config.js')

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    //使用webpack.config.js的 publicPath设置
    publicPath: config.output.publicPath
}))

app.listen(3000, function(){
    console.log('webpack-dev-middleware is running at localhost:3000')
})