import './index.css'
import logo from './assets/WebsiteLogo.webp'
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
                <div id='hidnav' className={`${open ? "w-50 delay-0 animate-slide-in" : "animate-slide-out w-0 delay-200"} h-[100vh] fixed top-0 left-0 bg-white drop-shadow-xl`} onAnimationEnd={()=>{setAnimating(false)}}>
                    <div className="w-full text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl z-20">
                        <ul className={`m-auto mt-30 ${open ? "text-[100%]" : "text-[0%] delay-200" } flex flex-col w-fit h-[40vh] drop-shadow-xl z-20`}>
                            <li className="m-auto my-6 z-20">
                                <a href="/home" className="m-auto !text-dark z-20" onClick={() => {console.log('working')}}>Home</a>
                            </li >
                                <hr className='h-1 z-20'/>
                            <li className="m-auto my-6">
                                <a href="/about" className="m-auto !text-dark z-20">About</a>
                            </li>
                                <hr className='h-2'/>
                            <li className="m-auto my-6 z-20">
                                <a href="/contact-us" className="m-auto !text-dark z-20">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-dark drop-shadow-xl z-20 w-full flex flex-row items-center mx-auto p-1">
                    <Bars3Icon className={`${open ? "" : ""} h-12 p-2 m-2 drop-shadow-xl text-white z-20`} onClick={invertOpen}/>
                    <a href="https://cometfallpress.com/" className="flex items-center">
                        <img src={logo} className="h-12 m-1 object-scale-down" alt="Cometfall Logo" />
                    </a>
                </div>
            </nav>
        </>
    )
    
}

export default Navbar