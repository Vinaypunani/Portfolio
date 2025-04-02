import React from 'react'
import { FaGithub } from "react-icons/fa";

const Title = ({ text,git }) => {
    return (
        <>
            <div className='text-3xl md:text-4xl lg:5xl flex justify-between'>
                <p>{text}</p>
                {git === true ? (<a href="https://github.com/Vinaypunani" target='_blank' className='flex gap-2 items-center text-xl border border-black px-3 py-2 hover:scale-110 transition-all duration-75'><FaGithub /> View More</a>) : null}
            </div>
            <div className='h-[2px] bg-black mt-3 md:mt-5'>

            </div>
        </>
    )
}

export default Title