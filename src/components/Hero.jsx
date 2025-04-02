import React from 'react'
import CodeBox from './CodeBox'

const Hero = () => {

const codeString = `const coder = {
  name: 'Vinay Punani',
  skills: ['React', 'TailwindCSS', 'Redux', 'Express', 'NodeJs',
          'MySQL', 'MongoDB', 'JWT'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <div className='w-full flex items-center md:justify-between gap-10 md:gap-0 flex-col md:flex-row pt-20 md:py-30'>
      <div className='w-full md:w-1/2'>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vinay Punani</h1>
        <p className="text-xl md:text-2xl mb-6">MERN Stack Developer</p>
        <p className="text-base md:text-lg max-w-md mb-8">
          Passionate Full Stack Developer specializing in MongoDB, Express, React, and Node.js.
          Building responsive and scalable web applications with modern technologies.
        </p>
        <div className="flex gap-4">
          <button onClick={()=> window.location.href = '/#projects'} className="bg-black text-background px-6 py-3 hover:opacity-90 transition-opacity">
            View Projects
          </button>
          <button onClick={()=> window.location.href = '/#contact'} className="border border-black px-6 py-3 hover:bg-black hover:text-background transition-colors">
            Contact Me
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
        <CodeBox codeString={codeString}/>
      </div>
    </div>
  )
}

export default Hero