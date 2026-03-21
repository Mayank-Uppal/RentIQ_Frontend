import propertyModel from "../models/property.js";
import mongoose from "mongoose";
import tenantModel from "../models/tenant.js";
import userAuthModel from "../models/userAuth.js";
const {ObjectId}=mongoose.Types;

export const getAllProperties=async(ownerId)=>{
    try {
        const properties=await propertyModel.find({
            $or:[
                {ownerId:ownerId},
                {tenant:new ObjectId(ownerId)}
            ]
        });
        return {message:properties};
    } catch (error) {
        throw error;
    }
}

export const propertyInfo=async(ownerId,{propertyName,propertyDesc,propertyType,address,city,pincode,rent,electricityCost,otherCost})=>{
    try {
        console.log("property info")
        const details=new propertyModel({ownerId,propertyName,propertyDesc,propertyType,address,city,pincode,rent,electricityCost,otherCost});
        await details.save();
        return {message:'Details added successfully',property:details};
    } catch (error) {
        throw error;
    }
}

export const propertyUpdate=async(ownerId,{propertyId},details)=>{
    try {
        const update=await propertyModel.findOne({_id:propertyId,ownerId:ownerId});
        if(!update)return {message:"Property does not exists"}
        await propertyModel.findOneAndUpdate({_id:propertyId,ownerId:ownerId},details);
        return {message:'Details updated successfully'};
    } catch (error) {
        throw error;
    }
}

export const propertyDelete=async(ownerId,{propertyId})=>{
    try {
        const response=await propertyModel.findOne({_id:propertyId,ownerId:ownerId});
        if(!response)return {message:"Property does not exists"}
        await propertyModel.findOneAndDelete({_id:propertyId,ownerId:ownerId});
        return {message:'Deleted successfully'};
    } catch (error) {
        throw error;
    }
}

export const eachPropertyDetail=async({propertyId},userId)=>{
    try {
        const property = await propertyModel.findOne({_id:propertyId,ownerId:userId}).populate({
            path:"tenant",
            populate:{
                path:'tenantId',
                model:"userAuth",
                select:"email"
            }});
        if(!property)return {message:"Property Does not exists"}
        return {message:property};
    } catch (error) {
        throw error
    }
}
