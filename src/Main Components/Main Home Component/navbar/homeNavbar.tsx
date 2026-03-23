import { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

interface prop{
    ishome:boolean,
    isbtn?:boolean,
    buttonArr?:{
        text:string,
        css:string,
        handleClick:()=>void
    }[]
}

function HomeNavbar({ishome,isbtn,buttonArr}:prop) {
    console.log(ishome)
    return (
        <>
            <nav className="dark bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-8 p-6">
                    <RouterLink to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
                        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">RentIQ</span>
                    </RouterLink>

                    {ishome??true?(
                        <>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li>
                                <Link to="home" smooth={true}
                    duration={800}
                    spy={true} className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="feature"  smooth={true}
                    duration={800}
                    spy={true} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Features</Link>
                            </li>
                            <li>
                                <Link to="review" smooth={true}
                    duration={800}
                    spy={true} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Reviews</Link>
                            </li>
                            <li>
                                <Link to="about"  smooth={true}
                    duration={800}
                    spy={true} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About Us</Link>
                            </li>
                        </ul>
                    </div>
                    </>
                    ):null}
                    {isbtn?(
                        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-8">
                            {buttonArr?.map((btn,index)=>(
                                <button type="button" key={index} onClick={btn.handleClick} className={btn.css}>{btn.text}</button>
                            ))}
                        </div>
                    ):null}
                </div>
            </nav>

        </>
    )
}

export default HomeNavbar;