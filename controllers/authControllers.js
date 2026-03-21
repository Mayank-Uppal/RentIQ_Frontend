import authServices from "../services/authServices.js";

const {authSignup,authLogin}=authServices;

const userSignup=async(req,res)=>{
    try {
        const signup=await authSignup(req.body);
        if(signup?.success===false)return res.status(409).json("Please check email ID");
        return res.status(201).json(signup);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}

const userLogin=async(req,res)=>{
    try {
        const login=await authLogin(req.body);
        if(login?.success===false)return res.status(404).json("Please enter correct email and password");
        return res.status(201).json(login);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}

export default {userLogin,userSignup};


