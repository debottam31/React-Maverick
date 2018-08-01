//entry--> output
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(__dirname);

module.exports = (env)=>{
    const isProduction  = env === 'production';
    return {
        entry : './src/app.js',
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
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            },{ test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                 loader: 'url-loader?limit=100000'
            }
        ]
        },
        plugins : [
            new MiniCssExtractPlugin({
                filename : 'styles.css'
            })
        ],
        devtool : isProduction ? 'source-map' : 'cheap-eval-source-map ',
        //devtool : 'source-map',
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback : true,
            host : '0.0.0.0',
            port : 8080
    
        } 
    };
}
