import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-16 md:mt-20 py-8 border-t border-black">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-medium">Vinay Punani</p>
          <p className="text-sm">Full Stack Developer</p>
        </div>
        
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="https://github.com/Vinaypunani" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vinay-punani-a55053301/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <FaLinkedin size={20} />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <FaTwitter size={20} />
          </a> */}
          <a href="mailto:vinaypunani@gmail.com" className="hover:opacity-70 transition-opacity">
            <FiMail size={20} />
          </a>
        </div>
      </div>
      
      <div className="mt-6 text-center text-sm">
        <p>&copy; {currentYear} Vinay Punani. All rights reserved.</p>
        <p className="mt-1">Built with React & TailwindCSS</p>
      </div>
    </footer>
  )
}

export default Footer