import mongoose from "mongoose"

const trainerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true

    },
    medals:{
        type:Number,
        required:true
    }

})
export const TrainerModel = mongoose.model('Trainer', trainerSchema)
