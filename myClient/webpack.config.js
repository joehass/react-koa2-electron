let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let {CleanWebpackPlugin } = require("clean-webpack-plugin")
let webpack = require('webpack')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    mode:'development',
    devtool:'eval-source-map',
    entry:['react-hot-loader/patch','babel-polyfill','./src/index.js'],
    // 构建出用于 Electron 渲染进程用的 JavaScript 代码，也就是这2个窗口需要的代码
    target: 'electron-renderer',
    output:{
        filename:'bundle.[hash:8].js',
        path:path.resolve(__dirname,'build')
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/public/index.html',//已该文件为模板生成打包后的html文件
            filename:'index.html',//生成html文件名
            minify:{//压缩打包后的html文件
                removeAttributeQuotes:true, //删除html文件中的双引号
                collapseWhitespace:true//html文件压缩成一行
            }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./build'] //在编译之前删除文件
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename:'css/main.css'//抽离出来的css文件名
        })
    ],

    module:{

        rules:[
            {//解析html文件，并编译图片
                test:/\.html$/,
                use:'html-withimg-loader'
            },

            {//解析图片，做一个限制，当图片小于多少k的时候，用base64来转化,当图片大于200k用file-loader来处理
                test:/\.(png|jpg|gif)$/,
                //use:'file-loader'
                use:          {
                    loader:'url-loader',
                    options:{
                        limit:1*1024,
                        outputPath:'/img/' //图片生成的路径
                    }
                }
            },

            {//解析图片
                test:/\.(png|jpg|gif)$/,
                use:'file-loader'
            },

            { //规则：css-loader 负责解析@import 这种语法
                //style-loader 他把css插入到head标签中
                //loader的特点：希望单一
                //loader的用法：字符串只用一个loader
                //多个loader需要[]
                //loader的顺序，默认是从右向左执行 从下到上执行
                //loader还可以写成对象方式
                //可以处理less文件
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,//表示使用该插件中的loader来抽离样式
                    'css-loader',
                    //'postcss-loader',//解析css文件之前进行某些操作，具体操作在该配置文件中定义
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    //'postcss-loader',//解析css文件之前进行某些操作，具体操作在该配置文件中定义
                    'less-loader' //less => css
                ]
            },

            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{//用babel-loader 需要把es6 => es5
                        presets:[//插件库，这里是大插件集合
                            '@babel/preset-env',//包含把es6转化为es5的模块，会调用该模块处理js文件
                            '@babel/preset-react'//解析react语法
                        ],
                        plugins:[//这里配置小插件
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],//解析装饰器
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            '@babel/plugin-transform-runtime',
                            "react-hot-loader/babel",
                            "dynamic-import-webpack"
                        ]
                    }
                },
                include:path.resolve(__dirname,'src'),//需要包含的目录
            }
        ]
    },

    resolve:{
        extensions:['.js']
    },

    //实时监控代码变化并实时打包
    watch:true,
    watchOptions:{//监控选项
        poll:1000,//每秒问1000次
        aggregateTimeout:500,//防抖，一直输入代码，停止后500毫秒打包一次
        ignored:/node_modules/ //不需要监控的内容
    },

    devServer:{
        port:2222,
        open:true,//自动打开浏览器
        contentBase:'./build',
        watchOptions:{
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
       hot:true//热更新，需要配合webpack.HotModuleReplacementPlugin使用
    }
}
