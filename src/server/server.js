
import  express from 'express'
import  ReactDOMServer from 'react-dom/server.js';
import {App} from '../shared/App.tsx';
import {indexTemplate} from './indexTemplate'
import  './services/passport'
import cookieSession from 'cookie-session'
import authRoutes from './routes/authRoutes.js'
import userWordsRoutes from './routes/userWordsRoutes.js'

import dotenv from 'dotenv'
import connectDB from './config/db.js'


import passport from 'passport'



dotenv.config()
connectDB() 

const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/',(req,res)=>{
    
    res.send(
     
        indexTemplate(ReactDOMServer.renderToString( App()  )))
  
})

app.listen(3000,()=>{
    console.log('Server started on http:/localhost:3000')
})

//нужно для аунтификации
app.use(
    cookieSession({
      maxAge:60*24*60*60*1000, //60 дней хранение куки
  keys:[process.env.cookieKey]
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  

app.use('/auth',authRoutes)
app.use('/auth/words',userWordsRoutes)






