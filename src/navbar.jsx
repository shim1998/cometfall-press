import './index.css'
import logo from './assets/CFPLogo_Horizontal Black Transparent.png'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Navbar() {
    let nav;
    window.onload = () => {  
        nav = document.getElementById('hidnav')  
    }

    const [open, setOpen] = useState(false)
    const [animating, setAnimating] = useState(false)

    const invertOpen = () => {
        if(!animating)
        {
            setAnimating(true)
            if(open){setOpen(false)}
            else{setOpen(true)}
        }
        //${open ? "" : ""}
    }

    return (
        <>
            <nav className="">
                <div id='hidnav' className={`-z-10 ${open ? "w-70 delay-0 animate-slide-in" : "animate-slide-out w-0 delay-200"} h-[100vh] fixed top-0 left-0 bg-white drop-shadow-xl`} onAnimationEnd={()=>{setAnimating(false)}}>
                    <div className="w-full text-3xl">
                        <ul className={`m-auto mt-40 ${open ? "text-[100%]" : "text-[0%] delay-200" } flex flex-col w-fit h-[40vh] drop-shadow-xl`}>
                            <li className="ml-3 my-4">
                                <a href="/home" className="!text-dark ">Home</a>
                            </li >

                            <li className="ml-3 my-4">
                                <a href="/about" className="!text-dark ">About</a>
                            </li>

                            <li className="ml-3 my-4">
                                <a href="/contact-us" className="m-auto !text-dark ">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-dark drop-shadow-xl z-20 w-full flex flex-row items-center mx-auto p-1">
                    <Bars3Icon className={`${open ? "" : ""} h-15 p-2 m-2 drop-shadow-xl text-white z-20`} onClick={invertOpen}/>
                    <a href="https://cometfallpress.com/" className="flex items-center">
                        <img src={logo} className="h-15 m-4 object-scale-down" alt="Cometfall Logo" />
                    </a>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar