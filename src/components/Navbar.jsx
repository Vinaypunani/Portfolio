import React, { useState } from 'react'


const Navbar = () => {

    const [location, setLocation] = useState('')

    const [isOpen, setIsOpen] = useState(false)



    const navLinks = [
        {
            name: "Home",
            link: ''
        },
        {
            name: "Projects",
            link: 'projects'
        },
        {
            name: "About",
            link: 'about'
        },
        {
            name: "Contact",
            link: 'contact'
        },
    ]

    return (
        <div className='w-full flex justify-between items-center px-10 md:20 lg:px-40 py-5 fixed top-0 left-0 bg-background/50 backdrop-blur-md '>
            <a 
            onClick={()=> setLocation('')}
            href="#" className='logo text-2xl font-semibold uppercase'>
                Vinay Punani
            </a>

            {/* for desktop */}
            <div className='hidden md:flex gap-4 items-center'>
                {
                    navLinks.map((item, index) => {
                        return <a onClick={() => setLocation(item.link)} key={index} href={`#${item.link}`} className={`${item.link == location ? 'border-b-[1.5px] pb-1' : ''} transition-all duration-100`}>{item.name}</a>
                    })
                }
            </div>
            <a href='/Resume_Vinay_Punani.pdf' download={"Resume_Vinay_Punani.pdf"} className='hidden md:block ml-7 border border-black hover:bg-black hover:text-background px-4 py-2 transition-colors transition-discrete duration-300 cursor-pointer'>Download CV</a>

            <div onClick={()=>setIsOpen(!isOpen)} className='flex md:hidden flex-col gap-1 z-[51]'>
                <div className={`h-1 w-7 bg-black rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`h-1 w-7 bg-black rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`h-1 w-7 bg-black rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>

            {/* for phone */}
            <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden fixed top-0 left-0 w-full h-screen flex-col items-center justify-center gap-4 text-2xl bg-background/100 backdrop-blur-md z-50`}>
                {
                    navLinks.map((item, index) => {
                        return <a onClick={() => {
                            setLocation(item.link);
                            setIsOpen(false);
                        }} key={index} href={`#${item.link}`} className={`${item.link == location ? 'border-b-[1.5px] pb-1' : ''} transition-all duration-300`}>{item.name}</a>
                    })
                }
                <a href='/Resume_Vinay_Punani.pdf' download={"Resume_Vinay_Punani.pdf"} className='mt-4 border border-black hover:bg-black hover:text-background px-4 py-2 transition-colors duration-300 cursor-pointer'>Download CV</a>
            </div>
        </div>
    )
}

export default Navbar