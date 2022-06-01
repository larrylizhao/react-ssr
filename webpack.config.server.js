const path= require('path');

//用于build ./src/client/app.js 以供 ./server/server.js 使用
module.exports = {
    target: 'node',
    mode: 'development',
    // devtool: 'eval-source-map',
    entry: path.join(__dirname, 'src/client/app'),
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'src/server')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
