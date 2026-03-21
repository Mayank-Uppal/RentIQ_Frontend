import {eachPropertyDetail,propertyInfo,getAllProperties,propertyUpdate,propertyDelete} from '../services/propertyService.js';

export const propertyDetails=async(req,res)=>{
    try {
        if (!req.user?.ownerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const property=await propertyInfo(req.user.ownerId,req.body);
        return res.status(201).json(property);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}

export const allProperties=async(req,res)=>{
    try {
        if (!req.user?.ownerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const properties=await getAllProperties(req.user.ownerId);
        return res.status(200).json(properties);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}

export const updateProperty=async(req,res)=>{
    try {
        if (!req.user?.ownerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
       const update=await propertyUpdate(req.user.ownerId,req.params,req.body);
       return res.status(200).json(update);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}

export const deleteProperty=async(req,res)=>{
    try {
        if (!req.user?.ownerId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const remove=await propertyDelete(req.user.ownerId,req.params);
        return res.status(200).json(remove);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
}


export const getpropertyDetails=async(req,res)=>{
    try {
        const propDetails=await eachPropertyDetail(req.params,req.user.ownerId);
        return res.status(200).json(propDetails);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}