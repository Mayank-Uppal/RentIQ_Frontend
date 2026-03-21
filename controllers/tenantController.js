import { tenantInvite } from "../services/tenant.js";
import { tenantDetails } from "../services/tenant.js";
import {profileTenant} from '../services/tenant.js';
import { rentUpdate } from "../services/tenant.js";
import { rentdata } from "../services/tenant.js";


export const inviteTenant=async(req,res)=>{
    try {
        const response=await tenantInvite(req.params);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

export const fetchDetails=async(req,res)=>{
    try {
        console.log("fetchdetails");
        const result=await tenantDetails(req.user.ownerId);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

export const tenantProfile=async(req,res)=>{
    try {
        const profile=await profileTenant(req.query,req.body,req.user.ownerId);
        return res.status(200).json(profile);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});   
    }
}

export const updateRent=async(req,res)=>{
    try {
        const rentTenant=await rentUpdate(req.params,req.body,req.user.ownerId);
        return res.status(200).json(rentTenant);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

export const rentArray=async(req,res)=>{
    try {
        const ans=await rentdata(req.params,req.user);
        return res.status(200).json(ans);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}