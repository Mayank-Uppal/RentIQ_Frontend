import mongoose from "mongoose";

const userAuthSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['Owner','Tenant']
    }
})

const userAuthModel=mongoose.model("userAuth",userAuthSchema);
export default userAuthModel;