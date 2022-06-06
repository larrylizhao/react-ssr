const path= require('path');

// 用于build ./src/client/app.js 以供 ./server/server.js 使用 ❌
// webpack打包的目的是为了给前端使用，server.js并无法使用打包后的component. 如果要给server.js使用直接用babel转译
module.exports = {
    target: 'node',
    mode: 'development',
    // devtool: 'eval-source-map',
    entry: path.join(__dirname, 'src/client/app'),
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'src/server'),
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
