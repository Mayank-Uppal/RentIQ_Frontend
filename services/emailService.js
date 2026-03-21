import propertyModel from "../models/property.js";
import sendMail from '../config/mail.js';
import jwt from 'jsonwebtoken';
import UserAuthModel from '../models/userAuth.js';
import userAuthModel from "../models/userAuth.js";
import tenantModel from "../models/tenant.js";

const inviteTenants=async(ownerId,{propertyId},emails)=>{
    try {
        console.log(emails)
        const isproperty=await propertyModel.findOne({_id:propertyId,ownerId});
        if(!isproperty)return {message:"Property does not exists"};

        for(const email of emails){
            const token=jwt.sign({
                propertyId:propertyId,
                ownerId:ownerId,
                tenant:email}
                ,process.env.secretKey,{expiresIn:"1h"});
            await sendMail(email,token);
        }
    } catch (error) {
        return  error;
    }
}

const inviteAccept=async({token})=>{
    try {
        const decode=jwt.verify(token,process.env.secretKey);
        const {tenant,propertyId}=decode;
        for(const email of tenant){
            const isemail=await userAuthModel.findOne({email:email,role:'Tenant'});
            if(!isemail)return {message:"auth"};
            const isprofile=await tenantModel.findOne({tenantId:isemail._id});
            if(!isprofile)return {message:"profile"}
            await propertyModel.findOneAndUpdate({_id:propertyId},{$addToSet:{tenantId:isemail._id}});
            return {message:"success"}
        }
    } catch (error) {
        return error;
    }
}
export default {inviteTenants,inviteAccept};