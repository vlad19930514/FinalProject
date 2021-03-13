const path = require('path')
const {HotModuleReplacementPlugin, DefinePlugin} = require('webpack')
const { CleanWebpackPlugin} =require ('clean-webpack-plugin')


const NODE_ENV = process.env.NODE_ENV
const IS_DEV = NODE_ENV === 'development'
const IS_PROD = NODE_ENV === 'production'
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()]
const COMMON_PLUGINS =[]


function setupDevtool(){
  if(IS_DEV) return 'eval'
  if(IS_PROD) return false
}


module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve:{
    extensions:['.js','.jsx', '.ts','.tsx', '.json'],
    
    alias:{
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : ' react-dom'
  }
},

 

entry:
[path.resolve(__dirname, '../src/client/index.jsx'),
'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
],

   
    output: {
      path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        
      publicPath:'/static/'
      },
      module: {
        rules: [
          {
            test:/\.[jt]sx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test:/\.css$/,
        use:[
            'style-loader',
             {
            loader:'css-loader',
        options:{
            modules:{
                mode:'local',
                localIdentName:'[name]_[local]--[hash:base64:5]',
            },
          
        }
        },
       
],
          },
        ],
      },
      plugins: IS_DEV 
      ? DEV_PLUGINS : COMMON_PLUGINS,
     
      devtool: setupDevtool(),
}