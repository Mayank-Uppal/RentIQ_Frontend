import HomeNavbar from "../Main Home Component/navbar/homeNavbar";
import HomePropCard from "./homePropCard";
import axios from "axios";
import { propbuttonList } from "./propertyProp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeModal from "../Main Modal Component/homeModal";
import Alert from "./Alert";


function HomeProperties({handleLogout}:{handleLogout?:()=>void}){
    const [istoken]=useState<string | null>(localStorage.getItem("token"));
    const [propertyData,setPropertyData]=useState<any[]>([]);
    const [showModal,setshowmodal]=useState<boolean>(false);
    const [propertyId,setpropertyId]=useState<string>("");
    const [alert,setalert]=useState<boolean>(false);
    const [alertMsg,setAlertMsg]=useState<string>("Invitation Sent Successfully");
    const [alertCss,setAlertCss]=useState<string>("alert alert-success");
    const navigate=useNavigate();



    const fetchData=async()=>{
        const res=await axios.get('https://rentiq-project.onrender.com/property/details',{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});
        console.log(res.data.message);
        const compiledData=res.data.message.map((prop:any)=>({
            ...prop,
            location:prop.address+ " " + prop.city + " " + prop.pincode,
        }))
        setPropertyData(compiledData);
    }

    useEffect(()=>{
        fetchData()
    },[istoken])

    const button = [
        {
            text:"Add Property",
            css:"text-white border-indigo-500 btn btn-outline hover:bg-black bg-indigo-500 px-12 py-6",
            handleClick:()=>navigate('/user/add/property')
        },
        {
            text:"Log Out",
            css:"text-white border-indigo-500 btn btn-outline hover:bg-indigo-500 bg-black px-12 py-6",
            handleClick:()=>handleLogout?.()
        }
    ]

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

    return(
        <>
        {showModal?(
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <HomeModal  propertyId={propertyId}  handlesubmit={handlesubmit}/>
            </div>
        ):null}

        {alert?(
            <div className="fixed top-0 right-0 z-[9999] w-full"> 
            <Alert message={alertMsg} css={alertCss}/>
            </div>
        ):null}
        

        <div className="dark bg-neutral-primary min-h-screen">

            <HomeNavbar ishome={false} isbtn={true} buttonArr={button}/>

            <div className="grid grid-cols-1 gap-10 md:p-4 md:grid-cols-2 justify-center items-center md:py-44">
                {propertyData.map((prop,index)=>{
                    const buttonList = [
                            {
                                btnTitle: propbuttonList[0].btnTitle,
                                handleClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    console.log("click");
                                    setpropertyId(prop._id);
                                    setshowmodal(true);
                                }
                            },
                            {
                                btnTitle: propbuttonList[1].btnTitle,
                                handleClick: async (e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    setpropertyId(prop._id);
                                    const tenantId = prop.tenant[0];
                                    await axios.get(
                                        `https://rentiq-project.onrender.com/Tenant/rent/${tenantId}`,
                                        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
                                    );
                                    navigate(`/property/${prop._id}/detail`);
                                }
                            }
                        ]
                    return(
                    <HomePropCard key={index} image='../images.jpeg'  property={[prop]} buttonList={buttonList} />
                    )
            })}
            </div>


        </div>
        </>
    )
}

export default HomeProperties;