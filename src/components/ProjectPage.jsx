import React from 'react'
import { Link } from 'react-router-dom'

const ProjectPage = () => {
  return (
    <div className='  flex flex-col justify-center items-center h-screen'>
        <p className='text-2xl text-center font-bold'>
            The Page is not available yet.
        </p>
        <p>Thank you!</p>
        
        <button className='ml-4 mt-8 text-purple-500 hover:underline'>
            <Link to="/">Go Back Home</Link>
        </button>
    </div>
  )
}

export default ProjectPage