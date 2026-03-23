import Form from "./form";

function Contact(){
    return(
        <>
        <div className="dark bg-neutral-primary py-40">
            <div className="md:ml-16 md:mb-24">
               <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">Let's Talk.</h1>
               <p className="md:w-xl md:mb-12 text-base font-normal text-body md:text-xl">Whether you have questions about features, need technical support, or just want to share your thoughts—we're all ears</p>
            </div>
        
            <div className="w-full flex justify-center items-center">
                <Form/>
            </div>
        </div>
        </>
    )
}
export default Contact;