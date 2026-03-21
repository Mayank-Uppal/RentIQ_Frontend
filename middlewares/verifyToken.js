import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:"Token not found"});
    }
    const token=authHeader.split(' ')[1];
    try {
        const decode=jwt.verify(token,process.env.secretKey);
        req.user=decode;
        next();  
    } catch (error) {
        console.log(error);
        return res.status(401).json("error");
    }
}

export default verifyToken;