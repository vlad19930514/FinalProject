import passport from 'passport'
import GoogleStrategy, {Strategy} from 'passport-google-oauth20'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/userModel'


console.log('123')
dotenv.config()


 passport.serializeUser((user,done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=> {
    User.findById(id)
    .then(user =>{
        done(null, user)
    })
}) 

passport.use(
   
    new GoogleStrategy(
        {
    clientID:  process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy:  true //одобрять любое начало сайта
   
},
 async (accessToken,refreshToken, profile, done) => {
     console.log(accessToken)
    console.log(profile)
     console.log(profile._json.name)
     console.log(profile._json.email)
     const existingUser = await User.findOne({googleId: profile.id}) 
     
         if(existingUser) {
             //we already have a record
             done(null, existingUser) // nothing to do
         } else {
             //we don't have
             new User({googleId: profile.id, name:profile._json.name,email:profile._json.email }).save()
             .then(user=> done(null,user)) 
            
         }
     
    

 }));
