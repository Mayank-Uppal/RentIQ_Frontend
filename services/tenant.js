import jwt from 'jsonwebtoken';
import propertyModel from '../models/property.js'
import userAuthModel from '../models/userAuth.js';
import tenantModel from '../models/tenant.js';
import mongoose, { mongo } from 'mongoose';
const {ObjectId}=mongoose.Types;

export const tenantInvite=async({token})=>{
    try {
        console.log("1. Function called");
        console.log("2. Token received:", token);
        console.log("3. Secret key:", process.env.secretKey);

        const response=jwt.verify(token,process.env.secretKey);
        console.log("4. JWT verified successfully:", response);

        const {tenant,propertyId}=response;
        console.log("5. Extracted data - tenant:", tenant, "propertyId:", propertyId);

        const istenant=await userAuthModel.findOne({email:tenant,role:'Tenant'});
        console.log("6. Database query result:", istenant);

        if(!istenant)return {message:"signup"};
        if(istenant)return {message:"login"};
        return {message:"success"}; 
    } catch (error) {
        throw error;
    }
}


export const tenantDetails=async(userId)=>{
    try {
        console.log(userId);
        const istenant=await tenantModel.findOne({tenantId:userId});
        if(!istenant)return {message:"Tenant not found"};
        const result=await propertyModel.find({tenant:istenant._id });
        return {message:result?result:"nothing"};
    } catch (error) {
        throw error;
    }
}

export const profileTenant=async({token},{firstName,lastName,fatherName,age,gender,occupation,aadharCard},userId)=>{
    try {
        console.log(token);
        const decode=jwt.verify(token,process.env.secretKey);
        const {propertyId}=decode;
        const res=await userAuthModel.findOne({_id:userId});
        if(!res)return {message:"user does not exists"};
        const isadded=await tenantModel.findOne({tenantId:userId});
        if(isadded) return {message:"Already added"};
        const prop=new tenantModel({tenantId:userId,firstName,lastName,fatherName,age,gender,occupation,aadharCard});
        await prop.save();
        await propertyModel.findByIdAndUpdate(propertyId,{$push:{tenant:prop._id}})

        const property=await propertyModel.findById(propertyId);
        const rent=property.rent;
        const rentDetails=[];
        const start=new Date(prop.joinedAt);
        const end=new Date();

        while(start<=end){
            rentDetails.push({
                month:start.toLocaleString('en-US', { month: 'short' }) + '-' + start.getFullYear(),
                rent:rent
            })
            start.setMonth(start.getMonth() + 1)
        }
        await tenantModel.findOneAndUpdate({tenantId:userId},{rentDetails:rentDetails});
        return {message:"profile added"};
    } catch (error) {
        throw error;
    }
}


export const rentUpdate=async({tenantId},{month},userId)=>{
    try {
        console.log("id",tenantId,"month",month,"id",userId);
        await tenantModel.findOneAndUpdate({
            _id:tenantId,
            "rentDetails.month":month
        },{ $set: { "rentDetails.$.rentstatus": "Paid" } })
        return {message:"updated"}
    } catch (error) {
        throw error;
    }
}

export const rentdata=async({tenantId},userId)=>{
    try {
        const tenant = await tenantModel.findOne({_id: tenantId});
        const start = new Date(tenant.joinedAt);
        const end = new Date();
        const property=await propertyModel.findOne({ownerId:userId});

        while(start <= end) {
            const monthYear = start.toLocaleString('en-US', { month: 'short' }) + '-' + start.getFullYear();
            const monthExists = tenant.rentDetails.find(r => r.month === monthYear);
            
            if(!monthExists) {
                await tenantModel.findByIdAndUpdate(tenantId, {
                    $push: { 
                        rentDetails: { 
                            month: monthYear,
                            rent: property.rent,
                            rentstatus: "Pending"
                        } 
                    }
                });
            }
            start.setMonth(start.getMonth() + 1);
        }

        const updatedTenant = await tenantModel.findById(tenantId);
        const sorted = updatedTenant.rentDetails.sort((a, b) => {
            return new Date(a.month) - new Date(b.month);
        });
        
        await tenantModel.findByIdAndUpdate(tenantId, {
            rentDetails: sorted
        });
        return { message: "done" };
    } catch (error) {
        throw error;
    }
}
