const path = require('path')
const nodeExternals = require('webpack-node-externals')

const NODE_ENV = process.env.NODE_ENV



module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve:{
        extensions:['.js','.jsx', '.ts','.tsx', '.json']
    },

    target:'node',
    entry:path.resolve(__dirname, '../src/server/server.js'),
    output:{
        path:path.resolve(__dirname,'../dist/server'),
        filename:'server.js'
    },
    externals:[nodeExternals()], // in order to ignore all modules in node_modules folder
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
             {
            loader:'css-loader',
        options:{
            
            modules:{
                mode:'local',
                
                 localIdentName:'[name]_[local]--[hash:base64:5]',
                 exportOnlyLocals:true 
            },
           
        }
        },
        
    ]
},
        ],
      },
}