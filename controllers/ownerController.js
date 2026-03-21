import {profileOwner} from '../services/owner.js'

export const ownerProfile=async(req,res)=>{
    try {
        console.log("hello")
        const response=await profileOwner(req.body,req.user.ownerId);
        if(response?.success===false)return res.status(404).json("User does not exist");
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(200).json("Internal Server Error");
    }
}
