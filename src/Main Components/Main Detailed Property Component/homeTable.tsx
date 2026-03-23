import { useState } from "react";
import RentHistory from "./homeRentHistory";
import axios from "axios";

interface tableProp{
    tableHeading:string[],
    tableData:any[],
    handleClick?:(id:any,month:string)=>void,
    rentstatus?:string
}

function HomeTable({tableHeading,tableData,handleClick,rentstatus}:tableProp) {
    const [rentHistory,setrentHistory]=useState<boolean>(false);

    return (
        <>
            <div className="relative overflow-x-auto dark bg-neutral-primary shadow-xs rounded-xs border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
                        <tr>
                            {tableHeading.map((heading, index) => (
                                <th key={index} scope="col" className="text-center px-6 py-3 text-white md:text-md font-bold">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data,index)=>(
                            <>
                        <tr  key={index} className="bg-neutral-primary-soft border-b border-default ">
                                <th scope="row" className="text-center flex items-center px-6 py-4 text-heading whitespace-nowrap">
                                
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{data.name}</div>
                                    <div className="font-normal text-body">{data.email}</div>
                                </div>
                            </th>
                            <td className="text-center px-6 py-4">
                                {data.age}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.gender}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.occupation}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.currentMonth}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.joinedAt}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.rent}
                            </td>
                            <td className="text-center px-6 py-4">
                                {data.totalAmountPaid}
                            </td>
                            <td className="text-center px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-success me-2"></div> {data.rentstatus}
                                </div>
                            </td>
                            <td className="text-center px-6 py-4">
                                <button onClick={()=>handleClick(data._id,data.currentMonth)} type="button" className=" text-white border-indigo-500 btn btn-outline bg-black hover:bg-indigo-500 py-3 ">Change</button>
                            </td>
                            <td className="text-center px-6 py-4">
                                <button onClick={()=>setrentHistory(!rentHistory)} type="button" className=" text-white border-indigo-500 btn btn-outline hover:bg-black bg-indigo-500 py-3 ">View History</button>
                            </td>
                        </tr>

                        {rentHistory && (
                            <tr>
                                <td colSpan={11} className="p-0">
                                <RentHistory />
                                </td>
                            </tr>
                        )}
                        </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default HomeTable;