import React from 'react'
import FadeInSection from './FadeInSection'

const About = () => {
  return (
    <FadeInSection>
    <div className='w-full flex justify-center place-items-center mt-20  hover:opacity-90'>
      <div className='w-full md:rounded-2xl flex flex-col p-5 py-10 border-t border-slate-900 md:flex-row items-center md:w-[60%]  md:h-80 overflow-hidden bg-black  md:p-10'>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <div className="w-full rounded-lg h-48 md:w-48 filter  grayscale-25 md:rounded-full overflow-hidden flex justify-center items-center bg-[url('/photo.jpg')] bg-cover bg-center md:border md:border-purple-900">
        </div>
      </div>
      
      <div className='w-full mt-5 '>
        <p className='text-2xl font-bold text-center md:text-left'> <span className='text-purple-500'>About </span>Me</p>
        <p className='text-lg md:text-xl mt-3 opacity-70 text-left'>I'm a second-year Computer Science student with nearly three years of hands-on coding experience. While I may not have formal work experience yet, I've built a strong foundation in front-end  and basic understanding in backend development and continue to grow my skills through personal projects and continuous learning.</p>
      </div>
      </div>
    </div>
    </FadeInSection>
  )
}

export default About