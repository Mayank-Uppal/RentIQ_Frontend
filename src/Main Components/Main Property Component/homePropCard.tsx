interface propertyProp{
    propertyName:string,
    propertyDesc:string,
    location:string,
    rent:number
}
interface CardProps{
    property:propertyProp[],
    buttonList?:{
        btnTitle:string,
        handleClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
    }[],
    image:string
}

function HomePropCard({property,buttonList,image}:CardProps){
    return(
        <>
        <div className="hover-3d">
                <div className="flex flex-col items-center bg-neutral-primary px-4 border border-default rounded-base shadow-xs md:flex-row md:max-w-3xl ">
                <img className="object-cover w-full rounded-base h-72 md:h-84 md:w-96 mb-4 md:mb-0" src={image}alt=""/>
                <div className="flex flex-col flex-1 justify-between md:p-7 leading-normal">
                {property.map((prop,index)=>(
                    <>
                    <div key={index}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">{prop.propertyName}</h5>
                    <p className="mb-6 text-body">{prop.propertyDesc}</p>
                    <p className="mb-6 text-body">Location : {prop.location}</p>
                    <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-sm font-bold px-4 py-3 rounded-sm">
                        Rent : {prop.rent}
                    </span>
                    </div>
                    </>
                ))}
                <div className="flex gap-4 mt-8 justify-between relative z-10">
                {buttonList?.map((btn,index)=>(
                    <>
                    <div key={index}>
                    <button onClick={btn.handleClick} style={{pointerEvents: 'auto'}} type="button" className=" cursor-pointer inline-flex items-center w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    {btn.btnTitle}
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </button>
                    </div>
                    </>
                ))}
                </div>
                </div>
            </div>
            

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            </div>
        </>
    )
}

export default HomePropCard;