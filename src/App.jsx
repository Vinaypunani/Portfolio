import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-background text-black w-full min-h-screen px-7 md:px-40'>
        <Navbar />

        <Hero />

        <Projects />

        <About />

        <Contact />

        <Footer />
    </div>
  )
}

export default App