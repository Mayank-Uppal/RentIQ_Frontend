import type { SubmitHandler } from "react-hook-form";
import type { Inputs } from "../../homeInput";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { signupFields,loginFields } from "./props";
import HomeInput from "../../homeInput";


function HomeForm(){
    const location=useLocation();
    const path=location.pathname.split('/')[3];
    const tenantToken=location.state?.tenantToken || "";
    const navigate=useNavigate();

    const handlenavigate=async()=>{
        if(path==="signup")navigate('/auth/user/login')
        else navigate('/auth/user/signup')

    }
    const onsubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response=await axios.post(`https://rentiq-project.onrender.com/auth/${path}`,data);
            const token=response.data.token;
            const role=response.data.role;
            localStorage.setItem("token",token);

            console.log("Tenant token",tenantToken);
            console.log("path",path)
            console.log("role",role)

            if(path==="signup" && tenantToken===""){
                navigate('/user/profile',{state:{role:response.data.role}});
            }
            else if(path==="login" && tenantToken==="" && role==="Owner"){
                navigate('/home',{state:{role:response.data.role}})
            }
            else if(path==="login" && tenantToken==="" && role==="Tenant"){
                console.log("hello")
                navigate('/tenant',{state:{role:response.data.role}})
            }
            else if(path==="login" && tenantToken!==""){
                navigate('/tenant',{state:{role:response.data.role,tenantToken:tenantToken}})
            }
        } catch (error) {
            console.log(error);
        }
    }
    const buttonList = [
        {
            css: "my-16 text-white border-indigo-500 btn btn-outline hover:bg-indigo-500 px-12 py-6",
            text: `${path==="signup"?"Sign Up":"Login"}`
        }
    ]

    return(
        <>

            <HomeInput handlenavigate={handlenavigate}
             onsubmit={onsubmit} textone={path==="signup"?"Already have an account?":"Don't have an account"} texttwo={path==="signup"?"Login":"Signup"} legend={path==="signup"?"Sign Up":"Login"} onchange={onchange} inputs={path==="signup"?signupFields:loginFields} role={path==="signup"?true:false} buttonList={buttonList} />
            
        </>
    )
}


export default HomeForm;