import React, { useRef, useState } from 'react'
import Title from './Title'
import { FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser';
import { ClipLoader } from 'react-spinners';

const Contact = () => {

    const [loading, setLoading] = useState(false)

    const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
    .sendForm('service_ofo01we', 'template_6a4i7dn', form.current, {
      publicKey: '-5cZIoNoTuRyq52E7',
    })
    .then(
      () => {
        alert('Thank you for your message! I will get back to you soon.')
        setLoading(false)
      },
      (error) => {
        console.log('FAILED...', error);
        alert('something went wrong')
        setLoading(false)
      },
    );
    // setLoading(false)
}

  return (
    <div className='mt-16 md:mt-20' id='contact'>
      <Title text={"Say Hello"} />
      
      <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
          <h3 className='text-xl font-semibold mb-4'>Get In Touch</h3>
          <p className='text-base leading-relaxed'>
            I'm always open to new opportunities, collaborations, or just a friendly chat about web development.
            Feel free to reach out through this form or connect with me directly via email or social media.
          </p>
          <div className='mt-6'>
            <h4 className='font-medium mb-2'>Email</h4>
            <p className='text-base'>vinaypunani@gmail.com</p>
          </div>
          <div className='mt-4'>
            <h4 className='font-medium mb-2'>Location</h4>
            <p className='text-base'>Wadhwan, Surendranagar, Gujarat, India</p>
          </div>
        </div>
        
        <div className='border border-black p-6 hover:shadow-lg transition-shadow'>
          <h3 className='text-xl font-semibold mb-4'>Send Me a Message</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='block mb-1 font-medium'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full border border-black p-2 focus:outline-none focus:ring-1 focus:ring-black'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-1 font-medium'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full border border-black p-2 focus:outline-none focus:ring-1 focus:ring-black'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block mb-1 font-medium'>Message</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                className='w-full border border-black p-2 focus:outline-none focus:ring-1 focus:ring-black'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='flex items-center gap-2 bg-black text-background px-4 py-2 hover:opacity-90 transition-opacity'
            >
              {
                loading ? <ClipLoader color='white' /> : <FiSend />
              }
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact