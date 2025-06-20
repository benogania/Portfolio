import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import CursorFollower from './components/cursor.jsx'
import Service from './components/Service.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

function App() {

  return (
    <div className='backdrop-blur-l overflow-x-hidden'>
      {/* <CursorFollower/> */}
      <Nav />
      <Home />
      <Skills/>
      <Service />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default App
