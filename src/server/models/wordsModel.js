import mongoose from 'mongoose'

const wordsSchema = mongoose.Schema({
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
},{
    timestamps: true
})

const Words = mongoose.model('Words',wordsSchema)
export default Words