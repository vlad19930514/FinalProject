import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    googleId:{
        type: String,
        
    },
    name:{
        type: String,
        
    },
    email:{
        type: String,
        
        unique:true
    },
    password:{
        type: String,
        
    },
    isAdmin:{
        type: Boolean,
       
        default:false
    },
    MainWords:[{

        word:{
            type: String,
            required:true
        },
        translate:{
            type: String,
            required:true,
           
        },
        done:{
            type: Boolean,
            
            default:false
        },
        transcription:{
            type: String,
            required:true,
        },
        count:{
            type: Number
            
           
        },

    }],
    WeekWords:[{

        word:{
            type: String,
            required:true
        },
        translate:{
            type: String,
            required:true,
           
        },
        done:{
            type: Boolean,
            
            default:false
        },
        transcription:{
            type: String,
            required:true,
        },
        count:{
            type: Number
            
           
        },

    }],
    MonthsWords:[{

        word:{
            type: String,
            required:true
        },
        translate:{
            type: String,
            required:true,
           
        },
        done:{
            type: Boolean,
            
            default:false
        },
        transcription:{
            type: String,
            required:true,
        },
        count:{
            type: Number
            
           
        },

    }]
},{
    timestamps: true
})

const User = mongoose.model('User',userSchema)
export default User