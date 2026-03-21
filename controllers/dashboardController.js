import details from "../services/dashboard.js";

const summary=async(req,res)=>{
    try {
        const response=await details(req.user.ownerId);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal server error");
    }
}

export default summary;