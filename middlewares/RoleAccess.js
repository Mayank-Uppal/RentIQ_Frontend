const roleAcess=async(req,res,next)=>{
    try {
        if(!req.user)res.status(404).json({message:"User Does not exists"});

        if(req.user.role=='Owner'){
            next();
        }
    } catch (error) {
        console.log(error);
    }
}

export default roleAcess;