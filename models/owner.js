import mongoose, { mongo } from "mongoose";

const ownerSchema=new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userAuth"
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    }
})

const ownerModel=mongoose.model("owner",ownerSchema);
export default ownerModel;