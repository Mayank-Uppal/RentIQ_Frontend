import invite from '../services/emailService.js';

const {inviteTenants,inviteAccept}=invite;

const sendInvite=async(req,res)=>{
    try {
        console.log("Tenant invite controllers")
        const response=await inviteTenants(req.user.ownerId,req.params,req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}

const acceptInvite=async(req,res)=>{
    try {
        const result=await inviteAccept(req.params);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}
export default {sendInvite,acceptInvite};