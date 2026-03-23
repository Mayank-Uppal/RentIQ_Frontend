import FeatureCard from "./featureCard";

const features=[{
    cardHeading:"Invite Multiple Tenants at Once",
    cardDescription:"Send invitations to multiple tenants simultaneously by adding different email addresses. Save time and onboard entire properties efficiently.",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#fafafa" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
},
{
    cardHeading:"Complete Tenant Overview",
    cardDescription:"View all active tenants with their complete details and rental history. Monitor occupancy status and access tenant information anytime",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#fafafa" viewBox="0 0 256 256"><path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path></svg>
},
{
    cardHeading:"Manage All Properties in One Place",
    cardDescription:"Add and organize multiple rental properties in a single centralized dashboard. Track occupancy, tenants, and key details across your entire portfolio.",
    icon:<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="#fafafa" viewBox="0 0 256 256"><path d="M240,208h-8V72a8,8,0,0,0-8-8H184V40a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V96H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM80,176H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm64,64H112V168h32Zm-8-64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm56,96H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z"></path></svg>
},

]

function Feature(){
    return(
        <>
        <div className="w-full dark bg-neutral-primary md:py-20">
            <div className="md:ml-16 md:mb-24">
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">Property Management, Simplified</h1>
               <p className="md:w-4xl md:mb-12 text-base font-normal text-body md:text-xl">Organize tenants with detailed tracking, manage multiple properties from a unified dashboard, and streamline your rental operations with powerful tools designed for efficiency.</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-52 justify-center">
                {features.map((feature,index)=>(
                <FeatureCard key={index} cardHeading={feature.cardHeading} cardDescription={feature.cardDescription} icon={feature.icon}/>
            ))}
            </div>
            
        </div>
        
        </>
    )
}
export default Feature;