import HomeNavbar from "../Main Home Component/navbar/homeNavbar";
import HomePropCard from "./homePropCard";
import axios from "axios";
import type {propertyProp} from './homePropCard';
import { propbuttonList } from "./propertyProp";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { Inputs } from "../../homeInput";
import { useNavigate } from "react-router-dom";
import {button} from './propertyProp';
import HomeModal from "../Main Modal Component/homeModal";
import Alert from "./Alert";


function HomeProperties({handleLogout}:{handleLogout:()=>void}){
    const [istoken,setistoken]=useState<string | null>(localStorage.getItem("token"));
    const [propertyData,setPropertyData]=useState<propertyProp[]>([]);
    const [showModal,setshowmodal]=useState<boolean>(false);
    const [propertyId,setpropertyId]=useState<string>("");
    const [alert,setalert]=useState<boolean>(false);
    const [alertMsg,setAlertMsg]=useState<string>("Invitation Sent Successfully");
    const [alertCss,setAlertCss]=useState<string>("alert alert-success");



    const fetchData=async()=>{
        const res=await axios.get('https://rentiq-project.onrender.com/property/details',{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});
        console.log(res.data.message);
        const compiledData=res.data.message.map((prop)=>({
            ...prop,
            location:prop.address+ " " + prop.city + " " + prop.pincode,
        }))
        setPropertyData(compiledData);
    }

    useEffect(()=>{
        fetchData()
    },[istoken])

    button[0].handleClick=()=>navigate('/user/add/property');
    button[1].handleClick=()=>handleLogout();

    const handlesubmit=(value:boolean)=>{
        setshowmodal(false);


        if(value){
            setalert(true);
            setAlertMsg("Invitation Sent Successfully");
            setAlertCss("alert alert-success");
            setTimeout(() => {
                setalert(false);
            }, 3000);
        }
        else{
            setalert(true);
            setAlertMsg("Click on Add Email first and then sent Invite");
            setAlertCss("alert alert-error");
            setTimeout(() => {
                setalert(false);
            }, 3000);
        }
    }

    const navigate=useNavigate();
    return(
        <>
        {showModal?(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <HomeModal  propertyId={propertyId} showModal={showModal} handlesubmit={handlesubmit}/>
            </div>
        ):null}

        {alert?(
            <div className="fixed top-0 right-0 z-[9999] w-full"> {/* Very high z-index */}
            <Alert message={alertMsg} css={alertCss}/>
            </div>
        ):null}
        

        <div className="dark bg-neutral-primary min-h-screen">

            <HomeNavbar ishome={false} isbtn={true} buttonArr={button}/>

            <div className="grid grid-cols-1 gap-10 md:p-4 md:grid-cols-2 justify-center items-center md:py-44">
                {propertyData.map((prop,index)=>{
                    const buttonList=[...propbuttonList];
                    buttonList[0]={
                        ...buttonList[0],
                        handleClick:()=>{
                            console.log("click")
                            setpropertyId(prop._id);
                            setshowmodal(true);
                        }
                    }
                    buttonList[1]={
                        ...buttonList[1],
                        handleClick:async ()=>{
                            setpropertyId(prop._id);
                            const tenantId=prop.tenant[0];
                            await axios.get(`https://rentiq-project.onrender.com/Tenant/rent/${tenantId}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})
                            navigate(`/property/${prop._id}/detail`)
                        }
                    }
                    return(
                        <>
                    <HomePropCard key={index} image='../images.jpeg'  property={[prop]} buttonList={buttonList} />
                    </>
                    )
            })}
            </div>


        </div>
        </>
    )
}

export default HomeProperties;