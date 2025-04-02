import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <div className='mt-16 md:mt-20' id='about'>
        <Title text={"About Me"} />
        <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold mb-4'>Who I Am</h3>
                <p className='text-base leading-relaxed'>
                    I'm a passionate Full Stack Developer with expertise in building modern web applications. 
                    With a strong foundation in both frontend and backend technologies, I create seamless, 
                    user-friendly experiences that solve real-world problems.
                </p>
                <p className='text-base leading-relaxed mt-4'>
                    My journey in web development started with a curiosity about how things work on the internet, 
                    and has evolved into a career where I continuously learn and adapt to new technologies.
                </p>
            </div>
            
            <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold mb-4'>Skills & Technologies</h3>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <h4 className='font-medium mb-2'>Frontend</h4>
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>React.js</li>
                            <li>JavaScript</li>
                            <li>HTML5 & CSS3</li>
                            <li>TailwindCSS</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-medium mb-2'>Backend</h4>
                        <ul className='list-disc pl-5 space-y-1'>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>RESTful APIs</li>
                            <li>JWT Authentication</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold mb-4'>Education</h3>
                <div className='mb-4'>
                    <h4 className='font-medium'>Bachelor of Computer Applications</h4>
                    <p className='text-sm'>Saurashtra University • 2022-2025</p>
                </div>
            </div>
            
            <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
                <h3 className='text-xl font-semibold mb-4'>Interests</h3>
                <p className='text-base leading-relaxed'>
                    Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, 
                    and staying updated with the latest web development trends. In my free time, you'll find me 
                    playing games, watching coding videos, or working on personal projects that challenge my skills.
                </p>
                <p className='text-base leading-relaxed mt-4'>
                    I'm particularly interested in web accessibility, performance optimization, and creating 
                    intuitive user interfaces that enhance the overall user experience.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About