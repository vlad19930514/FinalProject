const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'

function setupDevtool(){
  if(IS_DEV) return 'eval'
  if(IS_PROD) return false
}


module.exports = {
  resolve:{
    extensions:['.js','.jsx', '.ts','.tsx', '.json']
},

  mode: NODE_ENV ? NODE_ENV : 'development',
  entry:path.resolve(__dirname, 'src/index.jsx'),


   
    output: {
      path: path.resolve(__dirname, 'dist'),
        filename: 'client.js',
      
      },
      module: {
        rules: [
          {
            test:/\.[jt]sx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})],

      devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot:IS_DEV,
        open:true
      },
      devtool: setupDevtool(),
}