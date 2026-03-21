import mongoose from "mongoose";

const propertySchema=new mongoose.Schema({
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userAuth',
        required:true
    },
    tenant:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'tenant'
    }],
    propertyName:{
        type:String,
        required:true
    },
    propertyDesc:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        enum:['PG','Home','Hostel']
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
    rent:{
        type:Number,
        required:true
    },
    electricityCost:{
        type:Number,
        required:true
    },
    otherCost:[{
        billName:{
            type:String
        },
        cost:{
            type:Number
        }
    }]
})

const propertyModel=mongoose.model("property",propertySchema);
export default propertyModel;