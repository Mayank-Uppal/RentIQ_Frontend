import ReviewCarousel from "./reviewCarousel";

function Reviews(){
    return(
        <>
        <div className="dark bg-neutral-primary md:pt-44">
            <div className="md:ml-16 md:mb-24">
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">We're Listening.</h1>
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">Share Your Thoughts.</h1>
               <p className="md:w-xl md:mb-12 text-base font-normal text-body md:text-xl">As we grow, your feedback shapes every feature we build. Tell us what's working and what we can do better.</p>
            </div>
            
            <div>
                <ReviewCarousel/>
            </div>

        </div>
        </>
    )
}
export default Reviews;