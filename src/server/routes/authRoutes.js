import express from 'express'
import dotenv from 'dotenv'
import passport from 'passport'
import GoogleStrategy, {Strategy} from 'passport-google-oauth20'


import mongoose from 'mongoose'
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
router.get('/current_user', (req, res) => { res.send(
  
   
    
    req.user)} );




export default router