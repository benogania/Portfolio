import React from 'react'
import { useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div className='nav px-5 w-full h-[70px] flex place-items-center justify-between md:px-16' >
        <div className='flex items-center h-full'> 
            <img src={'./logo.png'} className='h-[50%] bg-gradient-to-r from-[#6627CC] to-[#5320a5] rounded-md'/>
            <p className='font-bold text-2xl ml-2'>BEN<span className='hidden md:inline'>DEV</span><span className='text-purple-500 text-3xl font-bold'>.</span></p>
           </div>

        <div onClick={toggleMenu} className='flex h-[40px] w-[40px] justify-center place-items-center rounded-full border-[0.7px] border-slate-700 md:hidden'> 
            <i className='bi bi-list text-xl '></i>
        </div>
        
        <div className='hidden md:flex gap-4 font-semibold justify-center place-items-center '>
            <button className='opacity-70 hover:opacity-100 cursor-pointer ' onClick={() => scrollToSection('home')}>Home</button>
            <button className='opacity-70 hover:opacity-100 cursor-pointer'onClick={() => scrollToSection('project')}>Project</button>
            <button className='opacity-70 hover:opacity-100 cursor-pointer' onClick={() => scrollToSection('service')}>Service</button>
            <button className='opacity-70 hover:opacity-100 cursor-pointer bg-white text-black rounded-full px-3 py-1 ml-6' onClick={() => scrollToSection('contact')}>Get in touch</button>
        </div>

        {isOpen && (
        <div className=' ' onClick={toggleMenu}>
        <ul className="py-5 h-1/3 md:hidden bg-black px-7 pb-4 space-y-2 absolute top-[0px] right-0 w-full shadow-lg rounded-lg">
          <div className='w-full flex justify-end' onClick={toggleMenu}>
            <i class="bi bi-x text-3xl"></i>
          </div>
          
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('project')}>Project</li>
          <li onClick={() => scrollToSection('service')}>Services</li>
          <li  onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
        </div>
      )}

    </div>
  )
}

export default Nav