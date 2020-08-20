const path = require('path');

module.exports = {
    entry:"./index.js",// 指定打包的入口
    output:{//指定打包后的入口
        //公共路径设置
        // publicPath:"http://cdn.baidu.com",
        path:path.resolve(__dirname,"./build"),
        filename:"index.js"
    },
    module:{
        //不认识的模块就在这里写
        rules:[
            {
                test:/\.png$/,
                use:{
                    //可以限定模块体积，减少http请求
                    loader:"url-loader",//就是把模块放在另外一个目录里面，
                    options:{
                        //name 是打包前模块名称，ext是打包前的模块格式
                        name:"[name].[ext]" ,
                        outputPath:"images/",
                        //设置图片是否打包出来，超出则打包，不超出则转换成base64格式，好处是能减少http请求格式
                        limit:24
                    }
                    }
            }
        ]
    }
    
}