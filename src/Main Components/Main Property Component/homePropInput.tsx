import HomeInput from "../../homeInput";
import HomeNavbar from "../Main Home Component/navbar/homeNavbar";
import { useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import type { Inputs } from "../../homeInput";
import axios from 'axios';
import { propertyButtonList,PropertyFields } from "./props";
import HomeHeading from "../Main Auth Component/homeHeading";

function HomePropInput(){
    const navigate=useNavigate();
    const handleSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response=await axios.post(`http://127.0.0.1:3000/property/add-details`,data,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});
            console.log(response.data.message);
            if(response.status===200 || response.status === 201){
                navigate('/home/property');
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
            <HomeHeading 
            AuthHeading="Time to Add Your Property" 
            AuthSubHeading="Quick setup, complete control" 
            AuthDescription="Fill in the property basics to start managing tenants and tracking rent. Skip anything you're unsure about—every field can be updated later. The more complete your property profile, the more powerful your insights become."
            />
            </div>
            
            <div className="w-full md:w-1/2">
                <HomeInput buttonList={propertyButtonList} inputs={PropertyFields} onsubmit={handleSubmit} legend="Add Property Details"/>
            </div>

            </div>

        </div>

        </>
    )
}

export default HomePropInput;