import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeNavbar from "../Main Home Component/navbar/homeNavbar";
import MainCopy from "../Main Home Component/Main /mainCopy";
import HomePropCard from "../Main Property Component/homePropCard";

export const tenantButtonList = [
    {
        btnTitle: "Read More",
        handleClick: (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
        }
    }
]

function HomeMainTenant() {
    const [tenantData, setTenantData] = useState<any[]>([]);
    const navigate = useNavigate();
    const location = useLocation();
    const tenantToken = location.state?.tenantToken;

    console.log(location.state)

    const fetchData = async () => {
        const response = await axios.get("https://rentiq-project.onrender.com/Tenant", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        console.log("response ", response.data)
        const compiledData = response.data.message.map((prop:any) => ({
            ...prop,
            location: prop.address + " " + prop.city + " " + prop.pincode,
            propertyName: prop.propertyName,
            propertyDesc: prop.propertyDesc
        }))
        setTenantData(compiledData);
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    console.log("Tenant Tenant Token", tenantToken);

    const button=[
        {
            text:"Log Out",
            css:"text-white border-indigo-500 btn btn-outline hover:bg-indigo-500 bg-black px-12 py-6",
            handleClick:()=>{
                localStorage.removeItem("token")
                navigate('/home')
            }
        }
    ]

    const mainCopyButtons = [
        {
            css: "text-white border-indigo-500 btn btn-outline hover:bg-indigo-500 bg-black px-12 py-6",
            text: "Log Out",
            handleClick: () => {
                localStorage.removeItem("token");
                navigate('/home');
            }
        }
    ];

    return (
        tenantToken || tenantData?(
        <div className="dark bg-neutral-primary min-h-screen">

            <HomeNavbar ishome={false} isbtn={true} buttonArr={button} />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-center items-center md:py-32 md:pl-12 ">
                {tenantData.map((prop, index) => (
                    <HomePropCard key={index} property={[prop]} buttonList={tenantButtonList} image='../images.jpeg' />
                ))}
            </div>
        </div>
        ): (
        <div className="dark bg-neutral-primary min-h-screen">
            <MainCopy titleOne="RentIQ" titleTwo="Welcome as Tenant !" HeadingOne="Welcome to RentIQ" HeadingTwo="Tenant Access" subHeading="You are currently logged in as a tenant. This section is designed for landlords and property managers to add and manage their rental properties. Access to property details and lease information will be available once your landlord sends you an invite through email. If you believe you should have landlord access, please use the logout button below to sign in with a different account." buttonList={mainCopyButtons} />
        </div>
    )
)}

export default HomeMainTenant;
