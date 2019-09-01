const path=require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({filename:'styles.css'})
    return {
        plugins: [
            CSSExtract,
            // new MiniCssExtractPlugin({
            //   // Options similar to the same options in webpackOptions.output
            //   // all options are optional
            //   filename: '[name].css',
            //   chunkFilename: '[id].css',
            //   ignoreOrder: false, // Enable to remove warnings about conflicting order
            // }),
          ],
        entry: './src/app.js',

        output: {
            path: path.join(__dirname,"public"),
            filename: 'bundle.js'
        } ,
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use:[
                    { loader: MiniCssExtractPlugin.loader},
                    { loader: 'css-loader',
                      options: {
                        sourceMap: true
                      }  
                    },
                    { loader: 'sass-loader',
                        options: {
                          sourceMap: true
                        }  
                    }                    
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname,"public"),
            historyApiFallback: true
        }
    }
}






