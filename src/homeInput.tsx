import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import type { RegisterOptions } from "react-hook-form"

export type Inputs = {
    [key:string]:string
}



interface InputRequiredProps{
    inputs:{
        type:string,
        placeholder:string,
        name:string,
        label:string,
        validation?:RegisterOptions,
        errorMsg?:string,
    }[],
    buttonList:{
        css:string,
        text:string
        handleClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void,
        type?:"submit" | "button"
    }[],
    onsubmit:SubmitHandler<Inputs>,
    role?:boolean,
    legend:string,
    handlenavigate?:()=>void,
    textone?:string,
    handleClick?:()=>void,
    texttwo?:string
}

function HomeInput({inputs,buttonList,onsubmit,role,legend,handlenavigate,textone,texttwo}:InputRequiredProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    return (
        <>
        <div className="dark bg-neutral-primary min-h-screen flex items-center justify-center py-8 px-4">
            <form className="dark bg-neutral-primary max-w-md mx-auto flex flex-col justify-center items-center" onSubmit={handleSubmit(onsubmit)} >
                <fieldset className="dark h-auto px-12 py-12 fieldset bg-base-200 border-default rounded-box w-lg border p-4">
                <legend className="text-white fieldset-legend p-4 text-lg">{legend}</legend>

                {inputs.map((inp,index)=>(
                    <>
                    <div className="mb-2" key={index}>
                        <input type={inp.type} id="floating_email" className=" block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder={inp.placeholder} {...register(inp.name,inp.validation)}/>
                        <label htmlFor="floating_email" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{inp.label}</label>
                    </div>
                    {errors[inp.name] && <span className="text-sm text-red-700">{inp.errorMsg}</span>}
                    </>
                ))}
                {role && (
                    <select className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-xs focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" {...register("role",{required:"Role is required"})}>
                    <option value="">Select Role</option>
                    <option value="Owner">Owner</option>
                    <option value="Tenant">Tenant</option>
                    </select>
                )}
                {errors.role && <span className="text-sm text-red-700">Role is required</span>}
                {buttonList.map((btn,index)=>(
                    <button onClick={()=>btn.handleClick} key={index} type={btn.type} className={btn.css}>{btn.text}</button>
                ))}
                <button onClick={handlenavigate} type="button" className="text-body cursor-pointer text-md">{textone} <span className="text-indigo-500 text-md">{texttwo}</span></button>
                </fieldset> 
            </form>
            </div>
        </>
    )
}
export default HomeInput;
