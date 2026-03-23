import { useNavigate } from 'react-router-dom';
import MainCopy from './mainCopy';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import HomeProperties from '../../Main Property Component/homeProperties';

function MainHome(){
    const navigate=useNavigate();

    const istoken=localStorage.getItem("token");
    const buttonList=[{
    css: "animate-bounce text-white border-indigo-500 btn btn-outline hover:bg-black bg-indigo-500 px-12 py-6 ",
    text: "Get Started",
    handleClick:()=>navigate('/auth/user/signup')
    }]

    const loginButtonList=[{
    css: "animate-bounce text-white border-indigo-500 btn btn-outline hover:bg-black bg-indigo-500 px-12 py-6 ",
    text: "Add Property",
    handleClick:()=>navigate('/user/add/property')
    }]

    const [token1,settoken1]=useState<string | null>(localStorage.getItem("token"));
    const [properties,setproperties]=useState<boolean>(false);

    const fetchData=async()=>{
        const res=await axios.get('https://rentiq-project.onrender.com/property/details',{headers:{Authorization:`Bearer ${token1}`}});
        if(res.data.message.length > 0){
            setproperties(true)
        }
    }
    useEffect(()=>{
        fetchData()
    },[token1])

    return(
        <>
        {!istoken && !properties && (
            <MainCopy titleOne="Introducing" titleTwo="Smart Property Management" HeadingOne="RentIQ" HeadingTwo="Track Better. Manage Faster" subHeading="RentIQ is a modern property management platform that helps landlords organize properties, manage tenants, 
            and track rental information in one centralized dashboard. Built with simplicity and efficiency in mind,it streamlines everyday rental operations and keeps everything structured and easy to manage." buttonList={buttonList} />
        )}

        {istoken && !properties && (
            <MainCopy titleOne="RentIQ" titleTwo="Add Your Property Now" HeadingOne="Welcome to RentIQ" HeadingTwo="Your Journey Begins Here" subHeading="Add your first property to start managing smarter. Whether it's a single unit or multiple properties, RentIQ keeps everything organized, tracked, and under control." buttonList={loginButtonList} />
        )}
            
        {istoken && properties && (
            <HomeProperties handleLogout={()=>{
            localStorage.removeItem("token");
            settoken1(null)
            setproperties(false);
        }}/>
        ) }
        </>
    )
}
export default MainHome;