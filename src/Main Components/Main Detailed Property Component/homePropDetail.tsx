import Table from "./homeTable";
import axios from "axios";
import {useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import { createContext } from "react";
import HomeNavbar from "../Main Home Component/navbar/homeNavbar";

export const tableHeading=["Tenant","Age","Gender","Occupation","Rent Month","Joining Month","Monthly Rent","Total Amount Paid","Rent Status","Edit","History"]
interface DataContextType {
    tenantDetail: any[];
    eachProperty: any[];
}
export const dataContext = createContext<DataContextType>(null!);


function HomePropDetail() {
    const [rentstatus]=useState<string>("Pending");
    const [eachProperty, setEachProperty] = useState<any[]>([]);
    const [tenantDetail,setTenantDetails]=useState<any[]>([]);
    const location = useLocation();
    const propertyId = location.pathname.split('/')[2];

    const fetchData = async () => {
        const response = await axios.get(`https://rentiq-project.onrender.com/property/details/${propertyId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
        const data = [response.data.message];
        const tenant=response.data.message.tenant;

        const compiledData = data.map((prop) => ({
            ...prop,
            propertyName: prop.propertyName,
            propertyDesc: prop.propertyDesc,
            location: prop.address + " " + prop.city + " " + prop.pincode
        }))
        const rent=response.data.message.rent.toLocaleString('en-IN');
        const compiledTableData = tenant.map((prop:any) => {

            const date = new Date(prop.joinedAt);
            const presentDate=new Date(Date.now());
            const pmonth=presentDate.toLocaleString('en-US', { month: 'short' });
            const pyear = presentDate.getFullYear();
            const month = date.toLocaleString('en-US', { month: 'short' });
            const year = date.getFullYear();

           

            return{
            ...prop,
            name: prop.firstName.charAt(0).toUpperCase()+prop.firstName.slice(1) + " " + prop.lastName.charAt(0).toUpperCase()+prop.lastName.slice(1),
            email:prop.tenantId.email,
            age:prop.age,
            occupation:prop.occupation.charAt(0).toUpperCase()+prop.occupation.slice(1),
            joinedAt:`${month}-${year}`,
            rent:rent,
            currentMonth:`${pmonth}-${pyear}`,
            rentstatus: prop.rentDetails.map((data:any) => {
    if(data.month === `${pmonth}-${pyear}`) return data.rentstatus
}) || "Pending",
            totalAmountPaid:((presentDate.getFullYear()-date.getFullYear())*12+(presentDate.getMonth()-date.getMonth()))*rent
            }
        })
        setTenantDetails(compiledTableData);
        setEachProperty(compiledData);
    }
    const handleSubmit=async(id:any,month:string)=>{
        try {
            const response=await axios.patch(`https://rentiq-project.onrender.com/Tenant/${id}`,{month},{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});
            console.log(response);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [propertyId,rentstatus])


    return (
        <>
        <dataContext.Provider value={{ tenantDetail, eachProperty }}>
            <div className="min-h-screen dark bg-neutral-primary flex flex-col gap-4 items-start px-8 y-10">
                <HomeNavbar ishome={false}/>
                <div className="w-full flex flex-col py-32">
                    <Table handleClick={handleSubmit} tableHeading={tableHeading} tableData={tenantDetail} />
                </div>
            </div>
        </dataContext.Provider>
        </>
    )
}

export default HomePropDetail;