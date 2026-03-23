interface card {
    cardHeading: string,
    cardDescription: string,
    icon: React.ReactNode  
}

function FeatureCard({ cardHeading, cardDescription, icon }: card) {
    return (
        <>
            <div className="hover-3d">
                <div className=" dark text-center flex flex-col items-center justify-center bg-neutral-primary max-w-sm p-6 border border-default rounded-base shadow-xs">
                    <div className="py-8">
                        {icon}
                    </div>
                    <a href="#">
                        <h5 className="mb-2 text-xl text-indigo-500 font-semibold tracking-tight">{cardHeading}</h5>
                    </a>
                    <p className="mb-3 text-body">{cardDescription}</p>
                </div>

                <div></div>
                <div></div>
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
export default FeatureCard;