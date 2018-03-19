
const path = require('path')
//该插件默认会生成自己的index.html,并将依赖打包引入该文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        //使用path设置输出目录
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //加载样式文件
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //加载图片
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //加载文字字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        //配置别名，
        alias: {
            assets: path.resolve(__dirname, 'src/assets')
        }
    }
}