const path=require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: path.format( { dir: __dirname,  base: 'env.test' })});
 
} else if (process.env.NODE_ENV === 'development') {
  //require('dotenv').config({path: path.format( { dir: __dirname,  base: 'env.development' })});
  require('dotenv').config({ path: 'env.development' });
  
}

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
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
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






