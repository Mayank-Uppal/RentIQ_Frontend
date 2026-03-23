import { useContext } from "react";
import { dataContext } from "./homePropDetail"; 
import React from "react";

const tableHeading=["Month","Rent","Rent Status"]
function HomeRentHistory() {
    const {tenantDetail}=useContext(dataContext);
    return (
        <>
            <div className="my-4 mx-4 relative overflow-x-auto bg-neutral-primary shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-hwhite bg-neutral-secondary-medium border-b border-t border-default-medium">
                        <tr>
                            {tableHeading.map((heading, index) => (
                                <th key={index} scope="col" className="text-center px-6 py-3 text-white md:text-md font-bold">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tenantDetail.map((data,index)=>(
                            <React.Fragment key={index}>
                                {data.rentDetails.map((rentDetails,index)=>(
                                 <tr  key={index} className="bg-neutral-primary-soft border-b border-default ">
                            <td className="text-center px-6 py-4">
                                {rentDetails.month}
                            </td>
                            <td className="text-center px-6 py-4">
                                {rentDetails.rent}
                            </td>
                            <td className={`${rentDetails.rentstatus==="Paid"?'text-green-600 text-center px-6 py-4':'text-red-500 text-center px-6 py-4'}`}>
                                {rentDetails.rentstatus}
                            </td>
                            </tr>
                            ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default HomeRentHistory;