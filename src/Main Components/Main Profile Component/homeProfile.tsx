import HomeNavbar from "../Main Home Component/navbar/homeNavbar";
import HomeHeading from "../Main Auth Component/homeHeading";
import type { SubmitHandler } from "react-hook-form";
import type { Inputs } from "../../homeInput";
import axios from "axios";
import HomeInput from "../../homeInput";
import { OwnerProfileFields,TenantProfileFields,buttonList } from "./prop";
import { useNavigate,useLocation } from "react-router-dom";


function HomeProfile(){
    const location=useLocation();
    const navigate=useNavigate();
    let role=location.state?.role;
    const tenantToken=location.state?.tenantToken;
    console.log(tenantToken);
    
    const handleSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
        console.log("Profile Tennat token",tenantToken)

            if(role === "Tenant" && !tenantToken){
            navigate('/tenant'); 
            return;
        }

        const apiUrl = role === "Owner" 
            ? `http://127.0.0.1:3000/Owner/profile`
            : `http://127.0.0.1:3000/Tenant/profile?token=${tenantToken}`;
        
        const response = await axios.post(apiUrl, data, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });
            console.log(response.status);
            if(response.status===200){
                if(tenantToken?.length > 0){
                    navigate('/tenant',{state: {tenantToken: tenantToken}})
                }else{
                    navigate('/home',{state:{role:role}});
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <div className="dark bg-neutral-primary min-h-screen">
            <HomeNavbar ishome={false}/>

            <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
                
            <div className="w-full md:w-1/2 ">
                <HomeHeading AuthHeading=" Great Start! One Final Step" AuthSubHeading="Help us customize things just for you" AuthDescription="Takes about 2 minutes to complete. Nothing here is mandatory—fill out what feels right for now and skip the rest. You can always come back and update your profile anytime from your settings. The more details you provide, the better we can personalize your experience and recommendations."/>
            </div>
            
            <div className="w-full md:w-1/2">
                <HomeInput buttonList={buttonList} inputs={role==="Owner"?OwnerProfileFields:TenantProfileFields} onsubmit={handleSubmit} legend="Profile Details"/>
            </div>

            </div>

        </div>
        </>
    )
}

export default HomeProfile;