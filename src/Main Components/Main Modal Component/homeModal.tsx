import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';

export type Inputs = {
    [key: string]: string
}

interface modalProps {
    handlesubmit: (value:boolean) => void,
    propertyId: string,
}


function HomeModal({ handlesubmit, propertyId }: modalProps) {
    const {register,handleSubmit,formState: { errors },setValue} = useForm<Inputs>()

    const [emails, setemail] = useState<string[]>([]);

    const handleAddEmail: SubmitHandler<Inputs> = async (data) => {
        if(emails.includes(data.email))return;
        setemail((prev) => ([...prev, data.email]));
        setValue("email","");
    }

    const handleRemoveEmail=(emailRemove:string)=>{
        setemail((prev)=>prev.filter(email=>email!=emailRemove));
    }

    const onsubmit=async(e:React.FormEvent) => {
        e.preventDefault();

        if(emails.length === 0){
            handlesubmit(false);
            return;
        }
        
        handlesubmit(true);

        try {
            await axios.post(`https://rentiq-project.onrender.com/property/${propertyId}/invite`, emails, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="dark overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
                        <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                            <h3 className="text-lg font-medium text-heading">
                                Invite Tenants
                            </h3>
                            <button type="button" className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg onClick={()=>handlesubmit(false)} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={onsubmit} action="#" className="pt-4 md:pt-6">
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Add email</label>
                                <input type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xs focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="example@company.com"  {...register("email", {
                                    required: "Email is Required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Enter valid email address" }
                                })} />
                                {errors.email?.message && <span className="text-red-500">Please enter valid email address</span>}
                            </div>

                            <div className="flex md:flex-row flex-col gap-8 py-2">
                                <button onClick={handleSubmit(handleAddEmail)} type="button" className=" text-white border-indigo-500 btn btn-outline bg-black hover:bg-indigo-500 px-12 py-6">Add Email</button>
                                <button type="submit" className="text-white hover:border-indigo-500 btn btn-outline bg-indigo-500 hover:bg-black px-12 py-6">Sent Invite</button>
                            </div>
                        </form>

                        <ul className="py-3" >
                            {emails.map((email, index) => (
                                <>
                            <div key={index} id="toast-success" className="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
                            <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success bg-success-soft rounded">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
                                <span className="sr-only">Check icon</span>
                            </div>
                            <div className="ms-3 text-sm font-normal">{email}</div>
                            <button type="button" className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-success" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg onClick={()=>handleRemoveEmail(email)} className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                            </button>
                        </div>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeModal;