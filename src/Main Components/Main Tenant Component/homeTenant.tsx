import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
console.log("🔥🔥🔥 FILE LOADED - HomeTenant.tsx 🔥🔥🔥");

function HomeTenant(){
    console.log("🔥 COMPONENT FUNCTION CALLED");
    const location=useLocation();
    const navigate=useNavigate();

    /* const token = location.search.split('=')[1]; */
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    console.log("Tenant token from Brevo", token);
    /* const token=location.search.split('=')[1] */

    /* console.log("Tenant token from Brevo",token) */
    const fetchTenant=async()=>{
        console.log("fetchTenant called");
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