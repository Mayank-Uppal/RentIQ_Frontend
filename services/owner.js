import ownerModel from "../models/owner.js";
import userAuthModel from "../models/userAuth.js";

export const profileOwner=async({name,address,city,pincode,age,gender,occupation},ownerId)=>{
    try {
        const isOwner=await userAuthModel.findOne({_id:ownerId});
        if(!isOwner)return {success:false,message:"User does not exists"};
        const isprofile=await ownerModel.findOne({ownerId:ownerId});
        if(isprofile)return {success:false,message:"Profile already added"};
        const newProfile=new ownerModel({ownerId:ownerId,name,address,city,pincode,age,gender,occupation});
        await newProfile.save();
        return {message:"user profile added"};
    } catch (error) {
        throw error;
    }
}