import { useContext } from "react";
import { dataContext } from "./homePropDetail"; 
import React from "react";

const tableHeading=["Month","Rent","Rent Status"]

function HomeRentHistory() {
    const {tenantDetail}=useContext(dataContext);
    if(!tenantDetail)return null;
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
                        {(tenantDetail || []).map((data: any, index: number) => (
                            <React.Fragment key={index}>
                                {data.rentDetails.map((rentDetail: any, index: number) => (
                            <tr key={index} className="bg-neutral-primary-soft border-b border-default">
                                <td className="text-center px-6 py-4">{rentDetail.month}</td>
                                <td className="text-center px-6 py-4">{rentDetail.rent}</td>
                                <td className={`text-center px-6 py-4 ${rentDetail.rentstatus === "Paid" ? 'text-green-600' : 'text-red-500'}`}>
                                    {rentDetail.rentstatus}
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