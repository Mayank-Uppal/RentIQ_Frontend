import userAuthModel from '../models/userAuth.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const authSignup=async({email,password,role})=>{
    try {
        const isemail=await userAuthModel.findOne({email});
        if(isemail)return {success:false,message:"Email ID already exists ! Please Login"};
        const hashPassword=await bcrypt.hash(password,10);
        const newOwner=new userAuthModel({email,password:hashPassword,role:role});
        await newOwner.save();
        const token=jwt.sign({ownerId:newOwner._id,ownerRole:newOwner.role,ownerEmail:newOwner.email},process.env.secretKey);
        console.log(token);
        return {message:"User signup successfully","token":token,"role":newOwner.role};
    } catch (error) {
        return {message:error};
    }
}

const authLogin=async({email,password})=>{
    try {
        const isemail=await userAuthModel.findOne({email});
        if(!isemail)return res.status(401).json({success:false,message:"Email ID does not exist ! Please signup"});
        const ispassword=await bcrypt.compare(password,isemail.password);
        if(!ispassword)return res.status(401).json({success:false,message:"Not authenticated"});
        const token=jwt.sign({ownerId:isemail._id,ownerRole:isemail.role,ownerEmail:isemail.email},process.env.secretKey);
        return {message:"User login successfully","token":token,"role":isemail.role};
    } catch (error) {
        return {message:error};
    }
}

export default {authSignup,authLogin};