import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomeTenant(){
    const location=useLocation();
    const navigate=useNavigate();
    const token=location.search.split('=')[1]
    console.log(token);
    const fetchTenant=async()=>{
        try {
            const response=await axios.get(`https://rentiq-project.onrender.com/Tenant/invite/${token}`);
            const message=response.data.message;
            if(message==='signup')navigate('/auth/user/signup',{state:{"tenantToken":token}});
            if(message==='login')navigate('/auth/user/login',{state:{"tenantToken":token}});
            if(message==="success")navigate('/tenant',{state:{"tenantToken":token}});
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchTenant()
    },[token])
    return(
        <>

        </>
    )
}

export default HomeTenant;