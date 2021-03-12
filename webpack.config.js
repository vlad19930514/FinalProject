const path = require('path')

const NODE_ENV = process.env.NODE_ENV
module.export = {
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
    
}