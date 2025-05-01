import React from 'react'
import Title from './Title'
import CodeBox from './CodeBox'
import { FiTriangle } from "react-icons/fi";

const Projects = () => {

    const projects = [
        {
            codeString: `
const project = {
  name: 'E-Commerce',
  tools: ['Express', 'MongoDB', 'React Js', 'TailwindCss', 'Node.js', 'JWT'],
  myRole: 'Full Stack Developer',
  description: 'Built a comprehensive e-commerce platform with user authentication, product catalog, cart functionality, and secure checkout process. Implemented responsive design and optimized performance for seamless shopping experience across all devices.'
};`,
            title: "E-Commerce",
            link: "https://vpforever.vercel.app/",
            tech: "MERN Stack"
        },
        {
            codeString: `
const project = {
  name: 'AI Image Generator SaaS',
  tools: ['MERN Stack', 'Razorpay', 'ClipDrop API', 'JWT Auth', 'Context API'],
  myRole: 'Full Stack Developer',
  description: 'Developed a credit-based SaaS application that allows users to generate AI images using the ClipDrop API. Integrated Razorpay for credit purchases, managed authentication via JWT, and handled global state using Context API. Built a responsive UI with React and efficiently managed backend logic with Node.js and MongoDB.'
};`,
title: "AI Image Generator SaaS",
link: "https://vp-imaginary.vercel.app/",
tech: "MERN Stack, Razorpay, ClipDrop API"
        },
        {
            codeString: `
const project = {
  name: 'GYM Website',
  tools: ['React', 'Material UI', 'RapidAPI', 'React Router', 'Redux Toolkit'],
  myRole: 'Frontend Developer',
  description: 'Built a comprehensive GYM application. Integrated with RapidAPI for exercise data, implemented state management with Redux Toolkit, and created smooth loading states for optimal user experience using Material UI components.'
};`,
            title: "GYM Website",
            link: "https://go-gym-gray.vercel.app/",
            tech: "React & Material UI"
        },
        {
            codeString: `
const project = {
  name: 'Movie Website',
  tools: ['React', 'TailwindCSS', 'OMDB API', 'Context API', 'React Router'],
  myRole: 'Frontend Developer',
  description: 'Developed a responsive movie browsing platform using React and TailwindCSS. Integrated with OMDB API for comprehensive movie data. Implemented Context API for efficient state management across components, allowing users to search, view details.'
};`,
            title: "Movie Website",
            link: "https://vp-movies.vercel.app/",
            tech: "React & TailwindCSS"
        },
        
    ]

    return (
        <div className='mt-16 md:mt-0' id='projects'>
            <Title text={"Projects"} git={true}/>

            <div className='mt-10 md:mt-20 lg:mt-30 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='border border-black p-4 hover:shadow-lg transition-shadow flex flex-col items-center'>
                        <div className='flex items-center justify-between px-5 md:px-10 py-5 w-full'>
                            <h3 className='text-xl font-semibold mb-3'>{project.title}</h3>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex gap-2 items-center rounded-md bg-black text-background px-4 py-2 hover:opacity-90 transition-opacity'
                            >
                                <FiTriangle className='rotate-90' />
                                Run
                            </a>
                        </div>
                        <CodeBox codeString={project.codeString} Title={project.tech} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects