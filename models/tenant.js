import mongoose from "mongoose";

const tenantSchema=new mongoose.Schema({
    tenantId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"userAuth"
        },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
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
    },
    aadharCard:{
        type:String
    },
    propertyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'property'
    },
    joinedAt:{
        type:Date,
        default:Date.now()

    },
    roomNo:{
        type:Number
    },
    rentDetails:[{
        
        month:{
            type:String,
        },
        rent:{
            type:Number,
        },
        rentstatus:{
            type:String,
            enum:"Pending" || "Paid",
            default:"Pendng"
        }
    }]
})

const tenantModel=mongoose.model("tenant",tenantSchema);
export default tenantModel;