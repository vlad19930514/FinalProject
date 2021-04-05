import express from 'express'
import asyncHandler from 'express-async-handler'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
const router = express.Router()
import Words from '../models/wordsModel.js'
import WeekWords from '../models/weekWordsModel.js'
import User from '../models/userModel.js'


import connectDB from '../config/db.js'
dotenv.config()
connectDB()





router.post('/add', asyncHandler( async (req, res)=> {
    

   
      
      
    
  
    await User.findOne({googleId: req.user.googleId},  function  (err, doc) {
   
      asyncHandler( async()=>{
        await doc.MainWords.push({word:req.query.word , translate:req.query.translate, transcription:req.query.transcription, count:0 }) 
        await doc.save();
        console.log(12)
        res.redirect('/')
      } )()
     
      
    }
    
   )
  
  
 
  } ))

 
  
  //удаление основного списка
  router.post('/main_delete', asyncHandler( async(req, res)=> {

 await User.findOne({googleId: req.query.googleId},  function (err, doc) {
    
    
    const index = doc.MainWords.findIndex(elem=> elem.id === req.query.wordId)
    
    asyncHandler( async()=>{
     await doc.MainWords[index].remove()
      await doc.save();
      res.redirect('/')
    })()
    
    }
   )
  
  
  
  } ))

   //удаление из основного и добавление в недельный список
   router.post('/addfromMainToWeek', asyncHandler( async(req, res)=> {
   

    await User.findOne({googleId: req.query.googleId},  function (err, doc) {
       
       const index = doc.MainWords.findIndex(elem=> elem.id === req.query.wordId)
       const wordFromMain = doc.MainWords[index]

       doc.WeekWords.push(wordFromMain) 
       
        doc.MainWords[index].remove()
       doc.save();
   
       }
      )
     
     res.redirect('/')
     
     } ))


     //удаление из недельного списка
  router.post('/week/delete', asyncHandler( async(req, res)=> {
    

    await User.findOne({googleId: req.query.googleId},  function (err, doc) {
       
       
       const index = doc.WeekWords.findIndex(elem=> elem.id === req.query.wordId)
       
       doc.WeekWords[index].remove()
       doc.save();
   
       }
      )
     
     res.redirect('/')
     
     } ))
   
      //удаление из недельного и добавление в ежемесячный список
      router.post('/addfromweektomonths', asyncHandler( async(req, res)=> {
       
   
       await User.findOne({googleId: req.query.googleId},  function (err, doc) {
          
          const index = doc.WeekWords.findIndex(elem=> elem.id === req.query.wordId)
          const wordFromMain = doc.WeekWords[index]
   
          doc.MonthsWords.push(wordFromMain) 
          
           doc.WeekWords[index].remove()
          doc.save();
      
          }
         )
        
        res.redirect('/')
        
        } ))

         //удаление из месячного списка
  router.post('/month/delete', asyncHandler( async(req, res)=> {
    

    await User.findOne({googleId: req.query.googleId},  function (err, doc) {
       
       
       const index = doc.MonthsWords.findIndex(elem=> elem.id === req.query.wordId)
       
       doc.MonthsWords[index].remove()
       doc.save();
   
       }
      )
     
     res.redirect('/')
     
     } ))

   
  


export default router
