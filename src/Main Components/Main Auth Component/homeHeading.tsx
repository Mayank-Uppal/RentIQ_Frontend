interface prop{
    AuthHeading:string,
    AuthSubHeading:string,
    AuthDescription:string,
}
function HomeHeading({AuthHeading,AuthSubHeading,AuthDescription}:prop){
    return(
        <>
        <div className="md:ml-16 md:mb-24">
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-indigo-500 md:text-5xl lg:text-5xl">{AuthHeading}</h1>
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-5xl">{AuthSubHeading}</h1>
               <p className="md:w-2xl md:mb-12 text-base font-normal text-body md:text-xl">{AuthDescription}</p>
        </div>
        </>
    )
}
export default HomeHeading;