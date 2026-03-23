import { useLocation } from "react-router-dom";
import HomeNavbar from "../../Main Components/Main Home Component/navbar/homeNavbar";
import { useEffect, useState } from "react";
import HomeHeading from "./homeHeading";
import HomeForm from "./homeForm";


function HomeAuth(){
    const location=useLocation();
    const route=location.pathname.split('/')[3];
    const [ishome,setishome]=useState<boolean>(true);
    return(
        <>

        <div className="dark bg-neutral-primary min-h-screen">
            <HomeNavbar ishome={false}/>

            <div className="flex flex-col md:flex-row justify-center items-center min-h-screen">
                

            {route==="signup"?(
                <div className="w-full md:w-1/2 ">
                <HomeHeading AuthHeading=" Create Your Account" AuthSubHeading="Your account is just moments away" AuthDescription="Quick signup, instant access. Start exploring all the features designed to make your life easier. From powerful analytics to seamless collaboration tools, everything you need is just a few clicks away. Join our platform today and experience a smarter way to work, connect, and grow"/>
                </div>
            ):(
                <div className="w-full md:w-1/2 ">
                <HomeHeading AuthHeading=" Welcome Back" AuthSubHeading="Access your account securely" AuthDescription="Log in to continue managing your properties, tracking payments, and staying connected with your tenants or owners. Your dashboard awaits with all the tools you need."/>
                </div>
            )}
        

            <div className="w-full md:w-1/2">
                <HomeForm/>
            </div>

            </div>

        </div>
       
        
        </>
    )
}

export default HomeAuth;