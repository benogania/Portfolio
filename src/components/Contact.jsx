import React from 'react'
import FadeInSection from './FadeInSection'
const Contact = () => {
  return (
    <div id='contact' className='w-full flex flex-col items-center justify-center gap-5 mt-24 p-5 '>
        <div className=' w-96 h-60 rounded-full  rotate-[40deg] opacity-10 bg-purple-700 blur-3xl z-[-3] fixed'></div>

        <FadeInSection>
        <p className='font-bold text-3xl'>Get In <span className=' bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent'>Touch</span></p>
        </FadeInSection>
        <FadeInSection>
        <p className='text-center text-xl'>Have a project in mind or want to collaborate? Feel free to reach out to me.</p>
        </FadeInSection>

        <div className='w-full flex flex-col mt-9 md:flex-row justify-center place-items-center md:place-items-start  gap-10 px-5'>
            
            <div className='p-5 bg-black w-80 md:w-96 rounded-lg flex flex-col gap-4'>
                <p className='text-xl font-bold '>Contact Information</p>

                <div className='flex gap-4  items-center'>
                    <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                        <p className='font-bold'>Email</p>
                        <p>benjunogania18@gmail.com</p>
                    </div>
                </div>

                <div className='flex gap-4  items-center'>
                    <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                        <p className='font-bold'>Phone</p>
                        <p>+(63) 975 843 1124</p>
                    </div>
                </div>

                <div className='flex gap-4  items-center'>
                    <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                        <p className='font-bold'>Location</p>
                        <p>Philipines</p>
                    </div>
                </div>
                <div className='mt-5 '>
                    <p className='font-bold'>Connect With Me</p>
                    <div className='flex gap-4 mt-4'>
                        <a href='https://github.com/benogania'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                            <i class="bi bi-github"></i>
                        </div>
                        </a>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                            <i class="bi bi-telegram"></i>
                        </div>
                        <a href='https://www.facebook.com/benjun.ogania.2024'>
                        <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#1e1033] text-purple-700 rounded-full'>
                            <i class="bi bi-facebook"></i>
                        </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='bg-black w-80 md:w-96  p-5 rounded-lg flex flex-col '>
                <p className='text-xl font-bold'>Or Send Me a message</p>
                <form className='flex flex-col gap-4 mt-4'>
                    <input type="text" placeholder='Your Name' className='p-2 rounded-md bg-[#1e1033] text-purple-700' />
                    <input type="email" placeholder='Your Email' className='p-2 rounded-md bg-[#1e1033] text-purple-700' />
                    <input type="email" placeholder='Subject' className='p-2 rounded-md bg-[#1e1033] text-purple-700' />
                    <textarea placeholder='Your Message' className='p-2 rounded-md bg-[#1e1033] text-purple-700 h-[100px]' />
                    <button type='submit' className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-all'>Send Message</button>
                </form>
            </div>
            </div>
    </div>
  )
}

export default Contact