//entry--> output
const path = require('path');

console.log(__dirname);

module.exports = {
    entry : './app.js',
    mode : 'development',
    output : {
        path : path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module : {
        rules : [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude : /node_modules/,
            query: {
                presets: ['react', 'es2015'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        },{
            test : /\.s?css$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        }]
    },
    devtool : 'chep-module-eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback : true,
        host : 'localhost',
        port : 8081
    } 
};