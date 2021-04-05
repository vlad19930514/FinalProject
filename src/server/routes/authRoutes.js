import express from 'express'
import dotenv from 'dotenv'
import passport from 'passport'
import asyncHandler from 'express-async-handler'




const router = express.Router()


import connectDB from '../config/db.js'
dotenv.config()
connectDB()


router.get('/google',

passport.authenticate('google',{
   
scope:['profile','email']
})
)

router.get('/google/callback', passport.authenticate('google'),
(req, res) =>{
    
    res.redirect('/')
} );

router.get('/logout', (req, res) => { 
    req.logout()
  
    res.redirect('/')

} );
router.get('/current_user', asyncHandler( async (req, res) => {
    
 
    console.log(req.user.MainWords.length)
    res.send(
  
   
    
    req.user)} ));




export default router