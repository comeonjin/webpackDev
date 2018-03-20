
const path = require('path')
//该插件默认会生成自己的index.html,并将依赖打包引入该文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')
//该插件在每次打包的过程中都会先清除dist目录，重新生成打包后的文件，保证dist目录的精确
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        //配置server服务器根目录
        contentBase: './dist'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            tilte: 'Output Management'
        })
    ],
    output: {
        filename: 'bundle.js',
        //使用path设置输出目录
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
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
    },
    
}