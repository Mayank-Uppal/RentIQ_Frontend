import {Element} from 'react-scroll'
import Feature from "../Features/feature";
import Reviews from "../Reviews/reviews";
import Footer from '../Footer/footer';
import Contact from "../Contact/contact";
import HomeNavbar from '../navbar/homeNavbar';
import { useNavigate } from 'react-router-dom';

interface MainProps{
    titleOne:string,
    titleTwo:string,
    HeadingOne:string,
    HeadingTwo:string,
    subHeading:string,
    buttonList:{
        css:string,
        text:string,
        handleClick:()=>void
    }[]
}


function MainCopy({titleOne,titleTwo,HeadingOne,HeadingTwo,subHeading,buttonList}:MainProps) {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();

    const btnOne = [{
        css: "text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xs text-sm px-6 py-3 focus:outline-none",
        text: "Log Out",
        handleClick: () => { localStorage.removeItem("token"); navigate("/home") }
    }]

    return (
        <>
        <HomeNavbar ishome={true} isbtn={true} buttonArr={token?btnOne:undefined} />


            <section className="dark bg-neutral-primary flex flex-col md:pt-32">
                <div className="py-8 px-4 md:mx-12 md:w-1/2 text-left lg:py-34 z-10 relative">
                    <div className=" btn btn-outline text-white mb-10 border-bg-indigo-500 " role="alert">
                        <span className=" text-white font-bold bg-indigo-500 py-0.5 px-2 rounded-xs">{titleOne}</span>
                        <div className="ms-2 text-sm font-bold text-white">
                            {titleTwo}
                        </div>
                        <svg className="w-4 h-4 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">{HeadingOne}</h1>
                    <h3 className="mb-7 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">{HeadingTwo}</h3>
                    <p className="mb-12 text-base font-normal text-body md:text-xl">{subHeading}</p>
                    <div className="flex gap-8 items-center justify-start">
                        {buttonList?.map((btn,index)=>(
                            <button key={index} onClick={btn.handleClick} type="button" className={btn.css}>{btn.text}</button>
                        ))}
                    </div>
                </div>
            </section>

            <Element name="feature">
            <Feature/>
            </Element>

            <Element name="review">
            <Reviews/>
            </Element>

            <Element name="contact">
            <Contact/>
            </Element>

            <Element name="about">
            <Footer/>
            </Element>
        </>
    )
}

export default MainCopy;