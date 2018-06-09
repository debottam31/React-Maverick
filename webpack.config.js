//entry--> output
const path = require('path');

console.log(__dirname);

module.exports = {
    entry : './src/app.js',
    mode : 'development',
    output : {
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/
        },{
            test : /\.s?css$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'chep-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        host : '0.0.0.0',
        port : 8080

    } 
};